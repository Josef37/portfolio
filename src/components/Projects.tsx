import React from 'react';
import Title from './Title';
import Project from './Project';
import { projects } from '../data/data';

const Projects: React.FC = () => (
  <section id="projects">
    <div className="container project-wrapper">
      <Title title="Projects" />
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
