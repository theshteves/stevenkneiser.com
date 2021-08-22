module.exports = {
  siteMetadata: {
    siteUrl: 'https://stevenkneiser.com',
    title: 'Steven Kneiser',
    titleTemplate: 'SK - %s',
    description: 'Steven Kneiser\'s little home on the internet',
    url: "https://stevenkneiser.com", // No trailing slash allowed!
    twitterUsername: "@theshteves",
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W5G9T6W",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/ico/favicon-16x16.png',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        "excerpt_separator": '<!-- excerpt -->',
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'markdown-header',
              isIconAfterHeader: false,
              icon: `<div class='markdown-header-link'></div>`,
              //icon: `<svg class="markdown-header-link" aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },
        ],
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
      __key: 'blog',
    },
  ],
  flags: {
    DEV_SSR: false
  }

}
