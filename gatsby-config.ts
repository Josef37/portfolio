import type { GatsbyConfig } from 'gatsby';
import type { PluginOptions as I18NextPluginOptions } from 'gatsby-plugin-react-i18next';

const pathPrefix = undefined;
// We can build with or without `--prefix-paths`, even though the option is set here.
const withPrefixPathsOption =
  process.argv.includes(`--prefix-paths`) ||
  process.env.PREFIX_PATHS === `true` ||
  process.env.PREFIX_PATHS === `1`;

const config: GatsbyConfig = {
  pathPrefix,

  plugins: [
    `gatsby-plugin-fix-fouc`,

    // Styles & Fonts
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `$path-prefix: "${withPrefixPathsOption ? pathPrefix : ''}";`,
      },
    },

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
        pathTranslations: {
          de: { '/resume/': '/lebenslauf/' },
        },
      } satisfies I18NextPluginOptions,
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
