import tw from 'twin.macro'

import { useStaticQuery, graphql } from 'gatsby'

import { HeaderDataQuery } from '../../generated/graphql-types'

const H1 = tw.h1`
  text-3xl font-bold text-primary
`

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

  return <H1>{data.site!.siteMetadata!.title}</H1>
}
