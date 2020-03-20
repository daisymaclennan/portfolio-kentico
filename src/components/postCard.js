import React from "react"
import styled from "styled-components"

const PostCard = ({ className, post }) => (
  <div className={className}>
    <a href={`/posts/${post.system.codename}`}>
      <img src={post.elements.featured_image.value[0].url} alt={post.elements.featured_image.value[0].description} />
      <h3>{post.system.name}</h3>
      <h5>{post.system.lastModified}</h5>
    </a>
  </div>
)

const StyledPostCard = styled(PostCard)`
  display: block;
  position: relative;
  text-align: center;
  background-color: #230138;
  padding: 25px;
  a{
    color: #FFFFFF;
    text-decoration: none;
  }
  h3{
    font-family: "Galano Grotesque";
    font-size: 24px;
  }
  h5{
    font-family: "Silka";
    font-size: 14px;
  }
  img{
    object-fit: cover;
  }

  @media screen and (min-width: 800px){
    padding: 25px;
    img{
      height: 15vw;
    }
  }

  @media screen and (max-width: 800px){
    margin-left: -20px;
    margin-right: -20px;
    padding: 20px;
  }

`

export default StyledPostCard
