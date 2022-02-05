import React, { FC } from 'react'
import { GlobalStyles as TwinGlobalStyles } from 'twin.macro'
import { Global, css } from '@emotion/react'
import tw from 'twin.macro'

const Container = tw.div``

export const Layout: FC<any> = ({ children, ...rest }) => (
  <>
    <TwinGlobalStyles />
    <Global
      styles={css`
        body {
          ${tw`font-serif leading-relaxed`}
        }
      `}
    />
    <Container {...rest}>{children}</Container>
  </>
)
