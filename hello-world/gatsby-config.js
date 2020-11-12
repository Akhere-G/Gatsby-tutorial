/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
}) 

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "some random description",
    author: "@ak",
    data: ["item 1", "item 2"],
    person: { name: "Peter", age: 32 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
     `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}\\src\\images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `o1id2mk6cebp`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.ACCESS_TOKEN,
        downloadLocal: true,
      },
    }
  
  ],
    
  
  }
