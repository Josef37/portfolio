import { graphql } from 'gatsby';

// This should be your allLocale query that you want to include everywhere
export const query = graphql`
  fragment Locales on Query {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    headLocales: allLocale(filter: { ns: { eq: "head" }, language: { eq: $language } }) {
      nodes {
        data
        language
      }
    }
  }
`;
