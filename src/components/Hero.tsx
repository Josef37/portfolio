import React from 'react';
import { Fade } from 'react-swift-reveal';
import { Link } from 'react-scroll';
import useIsMobile from '../hooks/useIsMobile';
import { hero } from '../data/data';

const Hero: React.FC = () => {
  const { title, name, subtitle1, subtitle2, cta } = hero;
  const isMobile = useIsMobile();

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name}</span>
          </h1>
          <p className="hero-subtitle">
            {subtitle1}
            <br />
            {subtitle2}
          </p>
        </Fade>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
