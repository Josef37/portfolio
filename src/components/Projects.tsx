import React from 'react';
import { Container } from 'react-bootstrap';
import Title from './Title';
import Project from './Project';
import { projects } from '../data/data';

const Projects: React.FC = () => (
  <section id="projects">
    <Container>
      <div className="project-wrapper">
        <Title title="Projects" />
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </Container>
  </section>
);

export default Projects;
