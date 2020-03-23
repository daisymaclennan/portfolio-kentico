import styled from "styled-components"

const PostGrid = styled.div`
  @media screen and (max-width: 1000px){
    div{
      margin-bottom: 40px; 
    }
  }
  @media screen and (min-width: 1000px){
    display: grid;

    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }

  @media screen and (min-width: 1000px) and (max-width: 1200px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default PostGrid
