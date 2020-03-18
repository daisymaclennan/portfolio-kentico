import styled from "styled-components"

const PageContent = styled.div`
  @media screen and (min-width: 800px){
    margin-left: calc(15vw + 30px);
    margin-right: calc(15vw + 30px);
  }

  @media screen and (max-width: 800px){
    margin-left: 20px;
    margin-right: 20px;
  }
`

export default PageContent
