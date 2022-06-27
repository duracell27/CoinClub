module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL || `https://dashboard.cc-poker.com/graphql`,
        // schema: {
        //   timeout: 10000,
        //   perPage: 10,
        //   requestConcurrency: 5
        // }
      }
    },

    {
      resolve: 'gatsby-plugin-anchor-links',
      // options: {
      //   //offset: -50
      // }
    },

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true
          }
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coin Club Poker Web Suit`,
        short_name: `CC Poker`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#F6BF4C`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ]
};
