import { graphql, HeadProps, Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Fade } from 'react-swift-reveal';

import Header from '../components/Header';

import '../style/main.scss';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <Fade bottom duration={1000} distance="30px">
            <h1 className="hero-title text-center">
              {t('404.message')}{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
            <p className="hero-cta">
              <Link className="cta-btn cta-btn--hero" to="/">
                {t('404.goBack')}
              </Link>
            </p>
          </Fade>
        </div>
      </section>
    </>
  );
};
export default Page404;

export const Head: React.FC<HeadProps> = (props) => {
  // `useTranslation` does not work in the Head API.
  // https://github.com/microapps/gatsby-plugin-react-i18next/issues/150

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, language } = (props.data as any).headLocales.nodes[0];
  const t = data ? JSON.parse(data) : {};

  return (
    <>
      <meta charSet="utf-8" />
      <title>{t.notFound}</title>
      <html lang={language} />
      <meta name="description" content={t.notFound} />
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    ...Locales
  }
`;
