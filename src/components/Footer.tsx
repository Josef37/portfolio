import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { footer } from '../data/data';

const Footer: React.FC = () => (
  <footer className="footer navbar-static-bottom">
    <div className='container'>
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <FontAwesomeIcon icon={faAngleUp} size="2x" />
        </Link>
      </span>
      <div className="social-links">
        {footer.networks.map((network) => {
          const { id, name, icon, url } = network;
          return (
            <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
              <FontAwesomeIcon icon={icon} inverse size="2x" />
            </a>
          );
        })}
      </div>
      <hr />
      <p className="footer__text">
        © {new Date().getFullYear()} - Template developed by{' '}
        <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
          Jacobo Martínez
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
