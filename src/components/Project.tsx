import React from 'react';
import { Fade } from 'react-swift-reveal';
// import Tilt from 'react-tilt';
import { Row, Col } from 'react-bootstrap';
import ProjectImage from './ProjectImage';
import useIsMobile from '../hooks/useIsMobile';
import type { projects } from '../data/data';

type ProjectProps = (typeof projects)[number];

const Project: React.FC<ProjectProps> = ({ id, title, info, info2, url, repo, img }) => {
  const isMobile = useIsMobile();

  return (
    <Row key={id}>
      <Col lg={4} sm={12}>
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title}</h3>
            <div>
              <p>{info}</p>
              <p className="mb-4 font-italic text-secondary">{info2}</p>
            </div>
            {url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={url}
              >
                See Live
              </a>
            )}

            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
      </Col>
      <Col lg={8} sm={12}>
        <Fade right={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="project-wrapper__image">
            {/* <Tilt
          options={{
            reverse: false,
            max: 8,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}
        > */}
            <div data-tilt className="thumbnail rounded">
              <ProjectImage alt={title} filename={img} />
            </div>
            {/* </Tilt> */}
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

export default Project;
