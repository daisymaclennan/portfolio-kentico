import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Arial;
    margin: 0;
  }
  img{
    width: 100%;
  }
  @media screen and (min-width: 800px){
    p{
      font-size: 26px;
      line-height: 40px;
    }
  }
  @media screen and (max-width: 800px){
    p{
      font-size: 24px;
      line-height: 29px;
    }
  }

`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

export default Layout
