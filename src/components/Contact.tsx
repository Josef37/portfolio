import React from 'react';
import { Fade } from 'react-swift-reveal';
import { contact } from '../data/data';
import Title from './Title';

const Contact: React.FC = () => (
  <section id="contact">
    <div className="container">
      <Title title="Contact" />
      <Fade bottom duration={1000} distance="30px">
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            {contact.cta || 'Would you like to work with me? Awesome!'}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={contact.btnUrl}
          >
            {contact.btn || "Let's Talk"}
          </a>
        </div>
      </Fade>
    </div>
  </section>
);

export default Contact;
