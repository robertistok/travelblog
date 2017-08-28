const { templateTypes } = require('./src/utils/template-types');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            type
          }
        }
      }
    }
  }`).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = templateTypes[node.frontmatter.type];

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
