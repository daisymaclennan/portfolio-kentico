import React from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  const blogPosts = data.allKontentItemBlogPost.edges
  const projects = data.allKontentItemProject.edges

  return(
    <div>
      <h1>Gatsby site using Kentico</h1>
      <h2>Blog posts</h2>
      {blogPosts.map(post => (
        <h4>{post.node.system.name}</h4>
      ))}
      <br />

      <h2>Projects</h2>
      {projects.map(project => (
        <h4>{project.node.system.name}</h4>
      ))}
    </div>
  )
}

export const query = graphql`
query MyQuery {
  allKontentItemBlogPost {
    edges {
      node {
        id
        system {
          name
        }
      }
    }
  }
  allKontentItemProject {
    edges {
      node {
        system {
          name
        }
        elements {
          featured_image {
            value {
              url
            }
          }
          description {
            value
          }
        }
      }
    }
  }
}
`
