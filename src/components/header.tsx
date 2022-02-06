import clsx from 'clsx'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FC, useState } from 'react'
import { useRecoilState } from 'recoil'

import { HeaderDataQuery } from '../../generated/graphql-types'
import { Switch } from './switch'
import { isDarkModeState } from '../states'
import { Helmet } from 'react-helmet'

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

  const [isDark, setIsDark] = useRecoilState(isDarkModeState)

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

      <Switch isSelected={isDark} onChange={setIsDark}>
        <span className="select-none">Dark mode</span>
      </Switch>

      <Helmet>
        <html className={clsx({ dark: isDark })}></html>
      </Helmet>
    </header>
  )
}
