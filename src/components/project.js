import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Heading from "./heading"
import ArrowLink from "./arrowLink"
import SubHeading from "./subHeading"
import PageContent from "./pageContent"
import PostCard from "./postCard"
import PostGrid from "./postGrid"
import LightContainer from "./lightContainer"

const ProjectTemplate = ({ data }) => {
  console.log(data)
  const project = data.kontentItemProject
  return(
    <Layout>
      <Heading>{project.system.name}</Heading>
      <PageContent>
        <div css={`@media screen and (min-width: 800px){margin-bottom: 100px;}`}>
          {project.elements.company.value && (
            <SubHeading>{project.elements.company.value}</SubHeading>
          )}
          {project.elements.live_website_url.value && (
            <ArrowLink text="view website" link={project.elements.live_website_url.value} />
          )}
          {project.elements.github_url.value && (
            <ArrowLink text="see me on GitHub" link={project.elements.github_url.value} />
          )}
        </div>
        <LightContainer>
          <h4 css={`text-align: right; opacity: 0.8;`}>{project.elements.time_period.value}</h4>
          <p>{project.elements.long_description.value}</p>
        </LightContainer>


        {project.elements.related_posts.linked_items.length > 0 && (
          <div>
            <SubHeading css={`@media screen and (min-width: 800px){margin-top: 175px;}`}>Related posts</SubHeading>
              <PostGrid>
                {project.elements.related_posts.linked_items.map(post => (
                  <PostCard post={post} />
                ))}
              </PostGrid>
          </div>
        )}
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
        long_description{
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
                codename
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
