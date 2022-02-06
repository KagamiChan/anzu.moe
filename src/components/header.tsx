import clsx from 'clsx'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FC, useState } from 'react'

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

  const [isDark, setIsDark] = useState(false)

  return (
    <header className="container my-8 inline-flex items-center">
      <h1
        className={clsx('grow text-4xl font-heading font-light', {
          'text-primary': !onIndex,
          'text-6xl': onIndex,
          'text-title': onIndex,
        })}
      >
        <Link to="/">{data.site!.siteMetadata!.title}</Link>
      </h1>

      <label className="inline-flex items-center">
        <input
          id="dark-mode-checkbox"
          className="form-checkbox"
          type="checkbox"
          checked={isDark}
          onChange={(e) => {
            if (e.currentTarget.checked) {
              setIsDark(true)
              document.documentElement.classList.add('dark')
            } else {
              setIsDark(false)
              document.documentElement.classList.remove('dark')
            }
          }}
        ></input>
        <span className="ml-2">Dark mode</span>
      </label>
    </header>
  )
}
