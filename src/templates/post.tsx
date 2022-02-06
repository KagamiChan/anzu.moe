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
    <main>
      <article className="prose md:prose-lg lg:prose-xl prose-headings:font-heading prose-headings:font-light">
        <h1>{data?.mdx?.frontmatter?.title}</h1>
        <MDXRenderer>{data.mdx!.body!}</MDXRenderer>
      </article>
    </main>
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
