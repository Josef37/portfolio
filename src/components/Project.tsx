import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Fade } from 'react-swift-reveal';
import useIsMobile from '../hooks/useIsMobile';
import { useTranslation } from '../hooks/useTranslation';
import ProjectImage from './ProjectImage';

interface ProjectProps {
  projectKey: string;
}

const Project: React.FC<ProjectProps> = ({ projectKey }) => {
  const { t } = useTranslation();
  const { t: projectT } = useTranslation({ keyPrefix: `projects.list.${projectKey}` });
  const isMobile = useIsMobile();

  return (
    <div className="project-wrapper__row">
      <div className="project-wrapper__left">
        <Fade left={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{projectT('title')}</h3>
            <div>
              <p>{projectT('info')}</p>
              <p className="text-secondary">{projectT('info2', { defaultValue: '' })}</p>
            </div>
            {projectT('demoUrl') && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={projectT('demoUrl')}
              >
                {t('projects.seeLive')}
              </a>
            )}

            {projectT('repoURL') && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={projectT('repoURL')}
              >
                {t('projects.sourceCode')}
              </a>
            )}
          </div>
        </Fade>
      </div>
      <div className="project-wrapper__right">
        <Fade right={!isMobile} bottom={isMobile} duration={1000} distance="30px">
          <Tilt
            tiltReverse
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            transitionSpeed={2000}
            className="project-wrapper__image"
          >
            <ProjectImage alt={projectT('title')} filename={projectT('img')} />
          </Tilt>
        </Fade>
      </div>
    </div>
  );
};

export default Project;
