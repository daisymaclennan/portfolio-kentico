import styled from "styled-components"

const ContainerWithHeader = styled.div`

@media screen and (min-width: 1000px){
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) -1.64%, #F5E4FF 61.35%);
  margin-top: 150px;
  margin-bottom: 300px;
  paddingg-top: 60px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;

  h1{
    transform: translateY(-144px);
    margin-bottom: -144px;
    padding-bottom: 30px;
  }
}

@media screen and (max-width: 1000px){
  margin-top: 50px;
}
`

export default ContainerWithHeader
