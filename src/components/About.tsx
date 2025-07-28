import React from 'react';
import { Fade } from 'react-swift-reveal';
import { Container } from 'react-bootstrap';
import Title from './Title';
import { about } from '../data/data';
import useIsMobile from '../hooks/useIsMobile';

const About: React.FC = () => {
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const isMobile = useIsMobile();

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text">{paragraphOne}</p>
            <p className="about-wrapper__info-text">{paragraphTwo}</p>
            <p className="about-wrapper__info-text">{paragraphThree}</p>
            {resume && (
              <span className="d-flex mt-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={resume}
                >
                  Résumé
                </a>
              </span>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default About;
