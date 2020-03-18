import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Heading from "./heading"
import ArrowLink from "./arrowLink"
import SubHeading from "./subHeading"
import PageContent from "./pageContent"
import PostCard from "./postCard"

const ProjectTemplate = ({ data }) => {
  console.log(data)
  const project = data.kontentItemProject
  return(
    <Layout>
      <Heading>{project.system.name}</Heading>
      <PageContent>
        <SubHeading>{project.elements.company.value}</SubHeading>
        <ArrowLink text="view website" link={project.elements.live_website_url.value} />
        <ArrowLink text="see me on GitHub" link={project.elements.github_url.value} />
        <div>
          <h4>{project.elements.time_period.value}</h4>
          <p>{project.elements.description.value}</p>
        </div>
        <div>

          {project.elements.related_posts.linked_items.length > 0 && (
            <>
              <SubHeading>Related posts</SubHeading>
              {project.elements.related_posts.linked_items.map(post => (
                <PostCard post={post} />
              ))}
            </>
          )}
        </div>
        </PageContent>
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
