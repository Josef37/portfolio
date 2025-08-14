import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Fade } from 'react-swift-reveal';
import useIsMobile from '../hooks/useIsMobile';
import { useTranslation } from '../hooks/useTranslation';
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
                <Link className="cta-btn cta-btn--resume" to="/resume">
                  {t('about.resume')}
                </Link>
              </span>
            }
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
