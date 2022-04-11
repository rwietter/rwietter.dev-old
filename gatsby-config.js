require("dotenv").config()
const queries = require("./src/utils/algolia.query")

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
})

module.exports = {
  siteMetadata: {
    title: `rwietter`,
    description: `Lorem ipsum`,
    position: `Front-end`,
    author: `@rwietter`,
    siteUrl: `https://rwietter.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122255216-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: "gatsby-plugin-bundle-stats",
      options: {
        compare: true,
        outDir: "./stats",
        stats: {
          context: "./src",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              withWebp: true,
              loading: "eager",
            },
          },
          "gatsby-remark-lazy-load",
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "dracula",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rwietter blog`,
        short_name: `rwietter`,
        start_url: `/`,
        background_color: `rgb(25, 25, 49)`,
        theme_color: `rgb(25, 25, 49)`,
        display: `minimal-ui`,
        icon: `static/assets/seo/seo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
  ],
}
