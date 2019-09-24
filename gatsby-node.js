const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    resolve(
      graphql(`
        {
          allContentfulCourse {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulCourse.edges.forEach(edge => {
          createPage({
            path: `${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
      })
    )
  })
}