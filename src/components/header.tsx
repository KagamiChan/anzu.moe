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
    <h1 className="text-5xl text-primary font-heading font-light px-4 sm:px-6 md:px-8">
      {data.site!.siteMetadata!.title}
    </h1>
  )
}
