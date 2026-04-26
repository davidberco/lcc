module.exports = {
  siteMetadata: {
    title: 'La Cinta Corta',
    siteUrl: 'https://lacintacorta.org'
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P4RNF8D',
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'La Cinta Corta',
        short_name: 'llc',
        start_url: '/',
        background_color: '#00C2BD',
        theme_color: '#00C2BD',
        display: 'standalone',
        icon: `${__dirname}/static/images/logo.svg`
      }
    },

    // Add static assets before markdown files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },

    // images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },

    // css — PostCSS config lives in postcss.config.js
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,

    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'white',
        showSpinner: false
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-decap-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true,
        manualInit: true
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
