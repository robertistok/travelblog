module.exports = {
  siteMetadata: {
    title: 'Insert name here',
    authot: 'Robert Istok',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-remark-smartypants',
      options: {
        dashes: 'oldschool',
      },
    },
  ],
};
