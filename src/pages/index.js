import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PageContent from "../components/pageContent"
import ContainerWithHeader from "../components/containerWithHeader"
import Heading from "../components/heading"
import ProjectCard from "../components/projectCard"
import PostCard from "../components/postCard"
import PostGrid from "../components/postGrid"

export default ({data}) => {
  const blogPosts = data.allKontentItemHome.edges[0].node.elements.featured_blog_posts.linked_items
  const projects = data.allKontentItemHome.edges[0].node.elements.featured_projects.linked_items

  return(
    <Layout>
      <PageContent>
        <ContainerWithHeader>
          <Heading>I am <span style={{color: "#7616B2"}}>Daisy</span>.</Heading>
          <p css={`
            width: 40%;
            text-align: right;
            margin-left: auto;
            font-size: 36px;
            `}>
            {data.allKontentItemHome.edges[0].node.elements.introduction.value}
          </p>
        </ContainerWithHeader>

        <ContainerWithHeader css={`
          @media screen and (min-width: 800px){
            div:nth-child(even){
              text-align: left;
              margin-right: auto;
            }
            div:nth-child(odd){
              text-align: right;
              margin-left: auto;
            }
          }
          `}>
          <Heading>Projects</Heading>
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </ContainerWithHeader>

        <ContainerWithHeader>
          <Heading>Blog</Heading>
          <PostGrid>
            {blogPosts.map(post => (
              <PostCard post={post} />
            ))}
          </PostGrid>
        </ContainerWithHeader>
      </PageContent>
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
                  name,
                  codename
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
