import React from "react"
import styled from "styled-components"

const PostCard = ({ className, post }) => (
  <a className={className}>
    <div>
      <img src={post.elements.featured_image.value[0].url} alt={post.elements.featured_image.value[0].description} />
      <h3>{post.system.name}</h3>
      <h5>{post.system.lastModified}</h5>
    </div>
  </a>
)

const StyledPostCard = styled(PostCard)`
  display: block;
  color: #FFFFFF;
  text-align: center;
  div{
    background-color: #230138;
    padding: 25px;
  }
  h3{
    font-family: "Galano Grotesque";
    font-size: 24px;
  }
  h5{
    font-family: "Silka";
    font-size: 14px;
  }

  @media screen and (min-width: 800px){
    div{
      padding: 25px;
    }
  }

  @media screen and (max-width: 800px){
    margin-left: -20px;
    margin-right: -20px;
    div{
      padding: 20px;
    }
  }

`

export default StyledPostCard
