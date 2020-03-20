import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import Heading from "./heading"
import PageContent from "./pageContent"
import LightContainer from "./lightContainer"

const PostTemplate = ({ data }) => {
  console.log(data)
  const post = data.kontentItemBlogPost
  return(
    <Layout>
      <Heading>{post.system.name}</Heading>
      <PageContent>
        <LightContainer>
          {post.elements.content.value}
        </LightContainer>
      </PageContent>
    </Layout>
  )
}

export const query = graphql`
query PostQuery($slug: String!) {
  kontentItemBlogPost(elements: {}, system: {codename: {eq: $slug}}) {
    elements {
      content {
        value
      }
      featured_image {
        value {
          url
          description
        }
      }
    }
    system {
      name
    }
  }
}
`

export default PostTemplate
