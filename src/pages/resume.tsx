import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, PropsWithChildren } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { graphql } from 'gatsby';

const ExternalLink: React.FC<PropsWithChildren<{ href: string }>> = (props) => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

const Icon: React.FC<{ icon: IconProp }> = ({ icon }) => (
  <span className="resume-icon">
    <FontAwesomeIcon icon={icon} widthAuto />
  </span>
);

const Title: React.FC = () => {
  const { t } = useTranslation({ keyPrefix: 'resume' });

  return (
    <div className="resume-title">
      <hgroup>
        <h1>Josef Wittmann</h1>
        <p className="resume-subtitle">{t('subtitle')}</p>
      </hgroup>
    </div>
  );
};

interface InfoProps {
  title: string;
  icon: IconProp;
}
const InfoItem: React.FC<PropsWithChildren<InfoProps>> = (props) => (
  <li>
    <h3>
      {props.title}
      <Icon icon={props.icon} />
    </h3>
    {props.children}
  </li>
);

const Aside: React.FC = () => {
  const { t } = useTranslation({ keyPrefix: 'resume.aside' });

  return (
    <div className="resume-aside">
      <h2>{t('info')}</h2>
      <ul>
        <InfoItem title={t('address')} icon={faLocationDot}>
          <p className="resume-address">
            Josef Wittmann
            <br />
            Eichstätt, {t('germany')}
          </p>
        </InfoItem>
        <InfoItem title={t('email')} icon={faEnvelope}>
          <p>
            <ExternalLink href="mailto:josef.wittmann@tutanota.com">
              josef.wittmann
              <wbr />
              @tutanota.com
            </ExternalLink>
          </p>
        </InfoItem>

        <InfoItem title={t('website')} icon={faGlobe}>
          <p>
            <ExternalLink href="https://josefwittmann.dev/">josefwittmann.dev</ExternalLink>
          </p>
        </InfoItem>

        <InfoItem title="GitHub" icon={faGithub}>
          <p>
            <ExternalLink href="https://github.com/Josef37">Josef37</ExternalLink>
          </p>
        </InfoItem>

        <InfoItem title="LinkedIn" icon={faLinkedin}>
          <p>
            <ExternalLink href="https://www.linkedin.com/in/josef-wittmann-96a342195/">
              Josef Wittmann
            </ExternalLink>
          </p>
        </InfoItem>
      </ul>
    </div>
  );
};

interface MainItemProps {
  title: string;
  location: string;
  url?: string;
  time?: { from: Date; to?: Date };
  timeOverride?: string;
}
const formatDate = (date: Date, language: string) => {
  return date.toLocaleDateString(language, { year: 'numeric', month: 'short', timeZone: 'UTC' });
};
const MainItem: React.FC<PropsWithChildren<MainItemProps>> = (props) => {
  const { t, language } = useTranslation({ keyPrefix: 'resume.main' });

  let date = props.timeOverride ?? '';
  if (props.time) {
    const from = formatDate(props.time.from, language);
    const to = props.time.to ? formatDate(props.time.to, language) : t('present');
    date = `${from} – ${to}`;
  }

  return (
    <li>
      <h3>{props.title}</h3>
      <p className="resume-job">
        <span className="resume-company">
          {props.url ? (
            <ExternalLink href={props.url}>{props.location}</ExternalLink>
          ) : (
            props.location
          )}
        </span>
        <span className="resume-date">{date}</span>
      </p>
      {props.children}
    </li>
  );
};

const Main: React.FC = () => {
  const { t } = useTranslation({ keyPrefix: 'resume.main' });

  return (
    <div className="resume-main">
      <section>
        <h2>{t('professional-experience')}</h2>

        <ul>
          <MainItem
            title={t('career-break.title')}
            location={t('career-break.location')}
            time={{ from: new Date('2024-07') }}
          >
            <p>{t('career-break.text')}</p>
          </MainItem>

          <MainItem
            title={t('ampeers.title')}
            location={t('ampeers.location')}
            url="https://ampeersenergy.de/"
            time={{ from: new Date('2022-08'), to: new Date('2024-06') }}
          >
            <p>{t('ampeers.text')}</p>
          </MainItem>

          <MainItem
            title={t('cosuno-lead.title')}
            location={t('cosuno-lead.location')}
            url="https://www.cosuno.com/"
            time={{ from: new Date('2022-01'), to: new Date('2022-07') }}
          >
            <p>{t('cosuno-lead.text')}</p>
          </MainItem>

          <MainItem
            title={t('cosuno.title')}
            location={t('cosuno.location')}
            url="https://www.cosuno.com/"
            time={{ from: new Date('2021-04'), to: new Date('2021-12') }}
          >
            <p>{t('cosuno.text')}</p>
          </MainItem>

          <MainItem
            title={t('qaware.title')}
            location={t('qaware.location')}
            url="https://www.qaware.de/"
            time={{ from: new Date('2019-03'), to: new Date('2019-05') }}
          >
            <p>{t('qaware.text')}</p>
          </MainItem>

          <MainItem
            title={t('createrawvision.title')}
            location={t('createrawvision.location')}
            url="https://createrawvision.de/"
            time={{ from: new Date('2018-05'), to: new Date('2022-12') }}
          >
            <p>{t('createrawvision.text')}</p>
          </MainItem>
        </ul>
      </section>

      <section>
        <h2>{t('education')}</h2>

        <ul>
          <MainItem
            title={t('tum.title')}
            location={t('tum.location')}
            url="https://www.tum.de/"
            time={{ from: new Date('2016-10'), to: new Date('2021-02') }}
          >
            <p>{t('tum.text')}</p>
          </MainItem>

          <MainItem
            title={t('wg.title')}
            location={t('wg.location')}
            url="https://www.willibald-gymnasium.de/"
            time={{ from: new Date('2008-09'), to: new Date('2016-06') }}
          >
            <p>{t('wg.text')}</p>
          </MainItem>
        </ul>
      </section>

      <section>
        <h2>{t('competitions')}</h2>

        <ul>
          <MainItem
            title={t('lwmb.title')}
            location={t('lwmb.location')}
            url="https://lwmb.de/"
            timeOverride="2013 & 2014"
          />

          <MainItem
            title={t('bwinf.title')}
            location={t('bwinf.location')}
            url="https://bwinf.de/bundeswettbewerb/"
            timeOverride="2016"
          />
        </ul>
      </section>
    </div>
  );
};

const PrintButton: React.FC = () => {
  const print = useCallback(() => window.print(), []);
  const { t } = useTranslation({ keyPrefix: 'resume.print' });

  return (
    <div className="print-button">
      <i>{t('text')}</i>
      <button type="button" onClick={print}>
        {t('button')}
      </button>
    </div>
  );
};

const Page: React.FC = () => (
  <div id="resume">
    <PrintButton />
    <div className="resume-page">
      <div className="resume-content">
        <Title />
        <Aside />
        <Main />
      </div>
    </div>
  </div>
);

export const query = graphql`
  query ($language: String!) {
    ...Locales
  }
`;

export default Page;
