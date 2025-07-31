import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Fade } from 'react-swift-reveal';
import Title from './Title';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <Title>{t('contact.title')}</Title>
        <Fade bottom duration={1000} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{t('contact.cta')}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={t('contact.btnUrl')}
            >
              {t('contact.btn')}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
