require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Rajat Gupta`,
    // Default title of the page
    siteTitleAlt: `Rajat Gupta`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Rajat Gupta`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://guptarajat.me`,
    // Used for SEO
    siteDescription: `An amalgamation of my thoughts, books, and tech.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: ``,
    // Twitter Handle
    author: `@rajatguptaa57`,
    // Links displayed in the header on the right side
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
<<<<<<< HEAD
            title: `All Posts`,
=======
            title: `Blog`,
>>>>>>> d7557f953b1af2e75fa41726342360e210ba698d
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
<<<<<<< HEAD
            url: `https://twitter.com/rajatguptaa57`,
          },
          {
            name: `Medium`,
            url: `https://www.medium.com/@rajatguptaa57/`,
          },
          {
            name: `Portfolio`,
            url: `https://rajatgupta.tech`,
=======
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
>>>>>>> d7557f953b1af2e75fa41726342360e210ba698d
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
<<<<<<< HEAD
        name: `Rajat Gupta`,
        short_name: `Rajat's`,
        description: `An amalgamation of my thoughts, books and tech`,
=======
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
>>>>>>> d7557f953b1af2e75fa41726342360e210ba698d
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
