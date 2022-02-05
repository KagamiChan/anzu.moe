import { useStaticQuery, graphql } from 'gatsby'

import { HeaderDataQuery } from '../../generated/graphql-types'

export const Header = () => {
  const data = useStaticQuery<HeaderDataQuery>(graphql`
    query HeaderData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <h1 className="text-3xl font-bold text-primary">
      {data.site!.siteMetadata!.title}
    </h1>
  )
}
