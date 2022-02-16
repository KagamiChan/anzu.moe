import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/layout'

import { PageBySlugQuery } from '../../generated/graphql-types'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

interface Props {
  data: PageBySlugQuery
}

const PostLayout: FC<Props> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {data?.mdx?.frontmatter?.title} - {data.site?.siteMetadata?.title}
      </title>
    </Helmet>
    <Header />
    <main className="flex-grow">
      <article className="prose dark:prose-invert md:prose-lg lg:prose-xl prose-headings:font-heading prose-headings:font-light">
        <h1>{data?.mdx?.frontmatter?.title}</h1>
        <MDXRenderer>{data.mdx!.body!}</MDXRenderer>
      </article>
    </main>
    <Footer />
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
