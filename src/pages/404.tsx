import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-swift-reveal';

import { head } from '../data/data';

import '../style/main.scss';

const Page404 = () => (
  <section id="hero" className="jumbotron">
    <div className='container'>
      <Fade bottom duration={1000} distance="30px">
        <h1 className="hero-title text-center">
          Sorry, this path does not exist{' '}
          <span role="img" aria-label="emoji">
            😞
          </span>
        </h1>
      </Fade>
      <Fade bottom duration={1000} distance="30px">
        <p className="hero-cta">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
          </Link>
        </p>
      </Fade>
    </div>
  </section>
);
export default Page404;

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <title>Page not found</title>
    <html lang={head.lang} />
    <meta name="description" content="Page not found" />
  </>
);
