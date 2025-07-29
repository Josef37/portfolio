import React from 'react';
import { Fade } from 'react-swift-reveal';
import Title from './Title';
import { about } from '../data/data';
import useIsMobile from '../hooks/useIsMobile';

const About: React.FC = () => {
  const { paragraphs, resume } = about;

  const isMobile = useIsMobile();

  return (
    <section id="about">
      <div className="container">
        <Title title="About Me" />
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="about-wrapper__info">
            {paragraphs.map((paragraph, index) => (
              <p className="about-wrapper__info-text" key={index}>
                {paragraph}
              </p>
            ))}
            {
              <span className="about-wrapper__button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href={resume}
                >
                  Résumé
                </a>
              </span>
            }
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
