import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
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

export const Head: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <>
      <meta charSet="utf-8" />
      <title>{t('head.title')}</title>
      <html lang={language} />
      <meta name="description" content={t('head.description')} />
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
  }
`;
