const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

// get post name and create slug path to each post item
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

// create blog post
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPageQuery {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD [de] MMM [de] YYYY")
                description
                title
								image
              }
              timeToRead
              fields {
                slug
              }
            }
            next {
              fields {
                slug
              }
              id
              frontmatter {
                title
              }
            }
            previous {
              frontmatter {
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    const posts = result.data.allMarkdownRemark.edges;
    
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          nextPost: previous,
          previousPost: next,
        },
      })
    })

    // create pagination
    const postsPerPage = 6
    const numberMaxPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberMaxPages }).forEach((_, idx) => {
      createPage({
        path: idx === 0 ? `/` : `/page/${numberMaxPages}`,
        component: path.resolve(`src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: idx * postsPerPage,
          numberMaxPages,
          currentPage: idx + 1,
        },
      })
    })
  })
}
