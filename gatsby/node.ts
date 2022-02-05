import { GatsbyNode, Node } from 'gatsby'
import path from 'path'
import { first, compact, split, each } from 'lodash'
import { createFilePath } from 'gatsby-source-filesystem'
import { Mdx, CreatePagesQuery } from '../generated/graphql-types'

const SRC = path.resolve(__dirname, '../src')

const isMdxNode = (
  node: Node & Record<string, unknown>,
): node is Node & Mdx => {
  return node.internal.type === `Mdx`
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions
  if (isMdxNode(node)) {
    const p = createFilePath({ node, getNode, basePath: 'content' })

    createNodeField({
      node,
      value: p,
      name: 'slug',
    })

    createNodeField({
      node,
      value: first(compact(split(p, '/'))),
      name: 'type',
    })

    const words = node.wordCount?.words || 0
    const WORD_PER_MINUTE = 160

    createNodeField({
      node,
      value: {
        words,
        minutes: Math.round(words / WORD_PER_MINUTE),
      },
      name: 'timeToRead',
    })
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage, createRedirect } = actions

  const result = await graphql<CreatePagesQuery>(`
    query CreatePages {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
              type
              timeToRead {
                words
                minutes
              }
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return Promise.reject(result.errors)
  }

  const posts = result?.data?.allMdx.edges

  if (!posts) {
    return Promise.resolve()
  }

  createRedirect({ fromPath: '/blog/page/1', toPath: '/blog' })

  each(posts, (post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: post?.node?.fields?.slug!,
      component: path.resolve(SRC, 'templates/post.tsx'),
      context: {
        previous,
        slug: post?.node?.fields?.slug,
      },
    })
  })

  return Promise.resolve()
}

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  })
}
