import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import useIsMobile from '../../hooks/useIsMobile';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle1, subtitle2, cta } = hero;

  const isMobile = useIsMobile();

  return (
    <section id="hero" className="jumbotron">
      <Container>
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
      </Container>
    </section>
  );
};

export default Hero;
