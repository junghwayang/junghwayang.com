module.exports = {
  siteMetadata: {
    title: "JUNGHWA",
    author: "Junghwa Yang",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}