import clsx from 'clsx'
import { FC } from 'react'
import { Helmet } from 'react-helmet'

import './layout.css'

export const Layout: FC<any> = ({ children, className, ...rest }) => (
  <>
    <Helmet>
      <body className="font-display transition-colors bg-background text-text" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif&family=Oxygen:wght@300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div
      className={clsx('max-w-6xl px-4 sm:px-6 md:px-8', className)}
      {...rest}
    >
      {children}
    </div>
  </>
)
