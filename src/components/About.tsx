import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Fade } from 'react-swift-reveal';
import useIsMobile from '../hooks/useIsMobile';
import Title from './Title';

const About: React.FC = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile();

  return (
    <section id="about">
      <div className="container">
        <Title>{t('about.title')}</Title>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="about-wrapper__info">
            {t('about.text')
              .split('\n')
              .map((line, index) => (
                <p className="about-wrapper__info-text" key={index}>
                  {line}
                </p>
              ))}
            {
              <span className="about-wrapper__button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href="/resume"
                >
                  {t('about.resume')}
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
