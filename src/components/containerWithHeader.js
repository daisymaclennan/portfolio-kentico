import styled from "styled-components"

const ContainerWithHeader = styled.div`
color: #230138;
@media screen and (min-width: 800px){
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) -1.64%, #F5E4FF 61.35%);
  margin-top: 150px;
  margin-bottom: 300px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;

  h1{
    transform: translateY(-144px);
    margin-bottom: -144px;
  }


}
`

export default ContainerWithHeader
