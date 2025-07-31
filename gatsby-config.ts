import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-fix-fouc`,
    `gatsby-plugin-sass`,

    // Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: `${__dirname}/src/images/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Translation
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: `locale`,
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        generateDefaultLanguagePage: true,
        siteUrl: `https://josefwittmann.dev/`,
        i18nextOptions: {
          defaultNS: 'translation',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },

    // Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josef Wittmann Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },

    // Unregisters service workers registered by `gatsby-plugin-offline`.
    // Keep this or else the website may not work for repeat visitors.
    'gatsby-plugin-remove-serviceworker',
  ],
};

export default config;
