require("dotenv").config();

const { spaceId, accessToken, snipcart, websiteId } = process.env;

module.exports = {
  siteMetadata: {
    title: `Above The Ride`,
    description: `Above the Ride brings life to your lifestyle.`,
    author: `DanielJS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#ffffff',
        height: '3px',
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId,
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Above the Ride`,
        short_name: `Above the Ride`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: snipcart,
        autopop: true,
        language: null
      },
    },
  ],
}
