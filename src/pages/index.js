import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContainerWithHeader from "../components/containerWithHeader"

export default ({data}) => {
  const blogPosts = data.allKontentItemHome.edges[0].node.elements.featured_blog_posts.linked_items
  const projects = data.allKontentItemHome.edges[0].node.elements.featured_projects.linked_items
  console.log(blogPosts)
  return(
    <Layout>
      <ContainerWithHeader>
        <h1>I am Daisy.</h1>
        {data.allKontentItemHome.edges[0].node.elements.introduction.value}
      </ContainerWithHeader>

      <ContainerWithHeader>
        <h1>Projects</h1>
        {projects.map(project => (
          <div key={project.system.id}>
            <h2>{project.system.name}</h2>
          </div>
        ))}
      </ContainerWithHeader>

      <ContainerWithHeader>
        <h1>Blog</h1>
        {blogPosts.map(post => (
          <div key={post.id}>
            <h2>{post.system.name}</h2>
            <img src={post.elements.featured_image.value[0].url} />
          </div>
        ))}
      </ContainerWithHeader>

    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allKontentItemHome {
    edges {
      node {
        elements {
          introduction {
            value
          }
          featured_blog_posts {
            linked_items {
              ... on KontentItemBlogPost {
                id
                system {
                  name
                  codename
                }
                elements {
                  featured_image {
                    value {
                      url
                    }
                  }
                }
              }
            }
          }
          featured_projects {
            linked_items {
              system {
                id
              }
              ... on KontentItemProject {
                id
                system {
                  name
                }
                contentType {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`
