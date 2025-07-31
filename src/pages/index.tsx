import { graphql, HeadProps } from 'gatsby';
import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

import '../style/main.scss';

const PageIndex: React.FC = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);
export default PageIndex;

export const Head: React.FC<HeadProps> = (props) => {
  // `useTranslation` does not work in the Head API.
  // https://github.com/microapps/gatsby-plugin-react-i18next/issues/150

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, language } = (props.data as any).headLocales.nodes[0];
  const t = data ? JSON.parse(data) : {};

  return (
    <>
      <meta charSet="utf-8" />
      <title>{t?.title}</title>
      <html lang={language} />
      <meta name="description" content={t?.description} />
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
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
