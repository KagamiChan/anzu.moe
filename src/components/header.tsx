import clsx from 'clsx'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FC } from 'react'

import { HeaderDataQuery } from '../../generated/graphql-types'

interface Props {
  onIndex?: boolean
}

export const Header: FC<Props> = ({ onIndex }) => {
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
    <header className="my-8">
      <h1
        className={clsx('text-4xl  font-heading font-light', {
          'text-primary': !onIndex,
          'text-6xl': onIndex,
        })}
      >
        <Link to="/">{data.site!.siteMetadata!.title}</Link>
      </h1>
    </header>
  )
}
