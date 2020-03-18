import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ContainerWithHeader from "../components/containerWithHeader"

export default ({data}) => {
  const blogPosts = data.allKontentItemHome.edges[0].node.elements.featured_blog_posts.linked_items
  const projects = data.allKontentItemHome.edges[0].node.elements.featured_projects.linked_items

  console.log("Projects:", projects)
  console.log("Posts:", blogPosts)
  return(
    <Layout>
      <ContainerWithHeader>
        <h1>I am Daisy.</h1>
        <p>{data.allKontentItemHome.edges[0].node.elements.introduction.value}</p>
      </ContainerWithHeader>

      <ContainerWithHeader>
        <h1>Projects</h1>
        {projects.map(project => (
          <div key={project.system.id}>
            <h2>{project.system.name}</h2>
            <h4>{project.elements.time_period.value}</h4>
            <p>{project.elements.description.value}</p>
            <a href={project.elements.featured_image.value[0].url}>
              <img src={project.elements.featured_image.value[0].url} alt={project.elements.featured_image.value[0].description}/>
            </a>
          </div>
        ))}
      </ContainerWithHeader>

      {<ContainerWithHeader>
        <h1>Blog</h1>
        {blogPosts.map(post => (
          <div key={post.id}>
            <h2>{post.system.name}</h2>
            <h5>{post.system.lastModified}</h5>
            <a href={post.elements.featured_image.value[0].url}>
              <img src={post.elements.featured_image.value[0].url} alt={post.elements.featured_image.value[0].description}/>
            </a>
          </div>
        ))}
      </ContainerWithHeader>}

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
                  lastModified(formatString: "DD/MM/YYYY")
                }
                elements {
                  featured_image {
                    value {
                      url
                      description
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
                elements {
                  featured_image {
                    value {
                      url
                      description
                    }
                  }
                  time_period {
                    value
                  }
                  description {
                    value
                  }
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
