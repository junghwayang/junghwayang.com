module.exports = {
  siteMetadata: {
    title: "JUNGHWA",
    author: "Junghwa Yang",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}