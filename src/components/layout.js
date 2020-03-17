import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    background-color: grey;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
