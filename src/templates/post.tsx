import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FC } from 'react'

import { Layout } from '../components/layout'

import { PageBySlugQuery } from '../../generated/graphql-types'
import { Header } from '../components/header'

interface Props {
  data: PageBySlugQuery
}

const PostLayout: FC<Props> = ({ data }) => (
  <Layout>
    <Header />
    <div>{data?.mdx?.frontmatter?.title}</div>
    <article className="prose">
      <MDXRenderer>{data.mdx!.body!}</MDXRenderer>
    </article>
  </Layout>
)

export default PostLayout

export const query = graphql`
  query PageBySlug($slug: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
