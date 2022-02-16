import { graphql, Link } from 'gatsby'
import { map } from 'lodash'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { IndexPageQuery } from '../../generated/graphql-types'
import { Footer } from '../components/footer'

interface Props {
  data: IndexPageQuery
}

const IndexPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.site?.siteMetadata?.title}</title>
      </Helmet>
      <Header onIndex />
      <main className="flex-grow">
        {map(data.allMdx.nodes, (node) => {
          return (
            <div key={node.id}>
              <Link className="text-primary text-2xl" to={node.fields!.slug!}>
                {node!.frontmatter!.title}
              </Link>
            </div>
          )
        })}
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
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
`
