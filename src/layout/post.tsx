import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FC } from 'react'

import { PageBySlugQuery } from '../../generated/graphql-types'

interface Props {
  data: PageBySlugQuery
}

const PostLayout: FC<Props> = ({ data }) => (
  <div>
    <h1>{data?.site?.siteMetadata?.title}</h1>
    <div>{data?.mdx?.frontmatter?.title}</div>
    <MDXRenderer>{data.mdx!.body!}</MDXRenderer>
  </div>
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
