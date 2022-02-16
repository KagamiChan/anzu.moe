import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import './footer.css'

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterFragment {
      mdx(
        fields: { type: { eq: "fragment" } }
        frontmatter: { role: { eq: "footer" } }
      ) {
        body
      }
    }
  `)

  return (
    <footer className="mb-4 mt-16">
      <MDXRenderer>{data.mdx!.body!}</MDXRenderer>
    </footer>
  )
}
