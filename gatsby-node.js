const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/` });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/post.js');
  const noteTemplate = path.resolve('./src/templates/note.js');

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const all = result.data.allMarkdownRemark.edges;
  const post = all.filter(edge => edge.node.fields.slug.includes('/blog/'));
  const learn = all.filter(edge => edge.node.fields.slug.includes('/learn/'));

  post.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        slug: node.fields.slug
      },
    });
  });

  learn.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: noteTemplate,
      context: {
        slug: node.fields.slug
      },
    });
  });
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

//   const result = await graphql(`
//     query {
//       allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/learn/"}}) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: `/learn${node.fields.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: node.fields.slug
//       },
//     });
//   });
// }