import { FC } from 'react'
import Helmet from 'react-helmet'

import './layout.css'

export const Layout: FC<any> = ({ children, ...rest }) => (
  <>
    <Helmet>
      <body className="font-serif" />
    </Helmet>
    <div {...rest}>{children}</div>
  </>
)
