import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import { rhythm, scale } from "../utils/typography"
import { GlobalStyle } from "../utils/theme"
import { withTheme } from "styled-components"

const Layout = withTheme(props => {
  const { theme, children } = props
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(26),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <GlobalStyle theme={theme} />
      <Header />
      <main>{children}</main>
    </div>
  )
})

export default Layout
