import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const ProjectTemplate = ({ data }) => {
  console.log(data)
  const project = data.kontentItemProject
  return(
    <Layout>
      <h1>{project.system.name}</h1>
      <h3>{project.elements.company.value}</h3>
      <a href={project.elements.live_website_url.value}>
        view website
      </a>
      <a href={project.elements.github_url.value}>
        see me on GitHub
      </a>
      <div>
        <h4>{project.elements.time_period.value}</h4>
        <p>{project.elements.description.value}</p>
      </div>
      <div>
        <h3>Related posts</h3>
        {project.elements.related_posts.linked_items && (
          project.elements.related_posts.linked_items.map(post => (
            <div key={post.id}>
              <img src={post.elements.featured_image.value[0].url} alt={post.elements.featured_image.value[0].description} />
              <h3>{post.system.name}</h3>
              <h5>{post.system.lastModified}</h5>
            </div>
          ))
        )}
      </div>
    </Layout>
  )
}


export const query = graphql`
query ProjectQuery($slug: String!) {
  kontentItemProject(elements: {}, system: {codename: {eq: $slug}}) {
    elements {
        company {
          value
        }
        description {
          value
        }
        featured_image {
          value {
            url
            description
          }
        }
        github_url {
          value
        }
        live_website_url {
          value
        }
        time_period {
          value
        }
        related_posts {
          linked_items {
            ... on KontentItemBlogPost {
              id
              elements {
                featured_image {
                  value {
                    description
                    url
                  }
                }
              }
              system {
                name
                lastModified(formatString: "DD/MM/YYYY")
              }
            }
          }
        }
      }
      system {
        name
      }
  }
}
`

export default ProjectTemplate
