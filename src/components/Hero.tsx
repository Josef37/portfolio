import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-swift-reveal';
import useIsMobile from '../hooks/useIsMobile';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section id="hero">
      <div className="container">
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <h1 className="hero-title">
            {t('hero.title')} <span className="text-color-main">{t('hero.name')}</span>
          </h1>
          <p className="hero-text">
            {t('hero.text')
              .split('\n')
              .map((line, index, arr) => (
                <Fragment key={index}>
                  {line}
                  {index + 1 < arr.length ? <br /> : null}
                </Fragment>
              ))}
          </p>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {t('hero.cta')}
              </Link>
            </span>
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
