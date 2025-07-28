import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-swift-reveal';

import { headData } from '../mock/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Page404 = () => (
  <section id="hero" className="jumbotron">
    <Container>
      <Fade bottom duration={1000} distance="30px">
        <h1 className="hero-title text-center">
          Sorry, this path does not exist{' '}
          <span role="img" aria-label="emoji">
            😞
          </span>
        </h1>
      </Fade>
      <Fade bottom duration={1000} distance="30px">
        <p className="hero-cta justify-content-center">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
          </Link>
        </p>
      </Fade>
    </Container>
  </section>
);
export default Page404;

export const Head = () => {
  const { lang } = headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>Page not found</title>
      <html lang={lang || 'en'} />
      <meta name="description" content="Page not found" />
    </>
  );
};
