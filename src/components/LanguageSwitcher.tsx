import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import React from 'react';

const LanguageSwitcher = () => {
  const { languages, language: currentLanguage, originalPath } = useI18next();

  return (
    <ul className="language-switcher">
      {languages.map((language) => (
        <li key={language}>
          <Link
            to={originalPath}
            language={language}
            className={language === currentLanguage ? 'current-language' : ''}
          >
            {language}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitcher;
