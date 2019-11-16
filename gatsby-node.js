const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const sources = await graphql(`
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
  `)

  if (sources.errors) return

  const posts = sources.data.allContentfulCourse.edges

  posts.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        slug: node.slug
      }
    })
  })
}