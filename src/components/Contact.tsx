import React from 'react';
import { Fade } from 'react-swift-reveal';
import { Container } from 'react-bootstrap';
import Title from './Title';
import { contact } from '../data/data';

const Contact: React.FC = () => (
  <section id="contact">
    <Container>
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
    </Container>
  </section>
);

export default Contact;
