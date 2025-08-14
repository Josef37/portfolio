import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <FontAwesomeIcon icon={faAngleUp} size="2x" />
          </Link>
        </span>
        <div className="social-links">
          {Object.entries(t('footer.networks', { returnObjects: true })).map(
            ([key, { name, url }]) => (
              <a key={key} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                <FontAwesomeIcon icon={getIcon(key)} inverse size="2x" />
              </a>
            ),
          )}
        </div>
        <hr />
        <p className="footer__text">
          {`© ${new Date().getFullYear()} - ${t('footer.developedBy')} `}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
};

const getIcon = (key: string) => {
  switch (key) {
    case 'github':
      return faGithub;
    case 'linkedin':
      return faLinkedinIn;
    default:
      return faArrowUpRightFromSquare;
  }
};

export default Footer;
