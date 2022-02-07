import clsx from 'clsx'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FC } from 'react'

import { HeaderDataQuery } from '../../generated/graphql-types'
import { Switch } from './switch'
import { useTheme } from './use-theme'

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

  const [theme, setTheme] = useTheme()

  const isDark = theme === 'dark'

  return (
    <header className="container my-8 inline-flex items-start">
      <h1
        className={clsx('grow text-4xl font-heading font-light', {
          'text-primary': !onIndex,
          'text-6xl': onIndex,
          'text-title': onIndex,
        })}
      >
        <Link to="/">{data.site!.siteMetadata!.title}</Link>
      </h1>

      {theme !== null && (
        <Switch
          isSelected={isDark}
          onChange={(isSelected) => {
            setTheme(isSelected ? 'dark' : 'light')
          }}
        >
          <span className="select-none">{isDark ? '🌙' : '🌞'}</span>
        </Switch>
      )}
    </header>
  )
}
