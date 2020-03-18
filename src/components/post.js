import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
  console.log(data)
  const post = data.kontentItemBlogPost
  return(
    <Layout>
      <h1>{post.system.name}</h1>
      <div>

      </div>
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
