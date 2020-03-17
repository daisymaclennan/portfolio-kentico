import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Arial;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
