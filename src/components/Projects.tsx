import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Project from './Project';
import Title from './Title';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projectKeys = Object.keys(t('projects.list', { returnObjects: true }));

  return (
    <section id="projects">
      <div className="container project-wrapper">
        <Title>{t('projects.title')}</Title>
        {projectKeys.map((key) => (
          <Project key={key} projectKey={key} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
