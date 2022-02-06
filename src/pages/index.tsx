import { graphql, Link } from 'gatsby'
import { map } from 'lodash'
import { FC } from 'react'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { IndexPageQuery } from '../../generated/graphql-types'

interface Props {
  data: IndexPageQuery
}

const IndexPage: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <main>
        <Header onIndex />
        <main>
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
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
