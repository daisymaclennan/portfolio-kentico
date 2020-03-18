const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query data from Kentico
  const result = await graphql(`
    query MyQuery {
      allKontentItemProject {
        edges {
          node {
            system {
              codename
              name
            }
          }
        }
      }
      allKontentItemBlogPost {
        edges {
          node {
            system {
              codename
              name
            }
          }
        }
      }
    }
  `)
  //Loops through each of the projects and creates a page for them
  result.data.allKontentItemProject.edges.forEach(({ node }) => {
    createPage({
      path: `projects/${node.system.codename}`,
      component: path.resolve(`./src/components/project.js`),
      context: { slug: `${node.system.codename}` },
    })
  })

  //Loops through each of the posts and creates a page for them
  result.data.allKontentItemBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.system.codename}`,
      component: path.resolve(`./src/components/post.js`),
      context: { slug: `${node.system.codename}` },
    })
  })
}
