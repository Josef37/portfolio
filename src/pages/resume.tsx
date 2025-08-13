import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';

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

const Title: React.FC = () => (
  <div className="resume-title">
    <hgroup>
      <h1>Josef Wittmann</h1>
      <p className="resume-subtitle">Software Developer</p>
    </hgroup>
  </div>
);

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

const Aside: React.FC = () => (
  <div className="resume-aside">
    <h2>Info</h2>
    <ul>
      <InfoItem title="Address" icon={faLocationDot}>
        <p className="resume-address">
          Josef Wittmann
          <br />
          Eichstätt, Germany
        </p>
      </InfoItem>
      <InfoItem title="Email" icon={faEnvelope}>
        <p>
          <ExternalLink href="mailto:josef.wittmann@tutanota.com">
            josef.wittmann
            <wbr />
            @tutanota.com
          </ExternalLink>
        </p>
      </InfoItem>

      <InfoItem title="Website" icon={faGlobe}>
        <p>
          <ExternalLink href="https://josefwittmann.dev/">josefwittmann.dev</ExternalLink>
        </p>
      </InfoItem>

      <InfoItem title="Github" icon={faGithub}>
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

interface MainItemProps {
  title: string;
  location: string;
  url?: string;
  time?: { from: Date; to?: Date };
  timeOverride?: string;
}
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en', { year: 'numeric', month: 'short', timeZone: 'UTC' });
};
const MainItem: React.FC<PropsWithChildren<MainItemProps>> = (props) => (
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
      <span className="resume-date">
        {props.time
          ? `${formatDate(props.time.from)} – ${props.time.to ? formatDate(props.time.to) : 'present'}`
          : (props.timeOverride ?? '')}
      </span>
    </p>
    {props.children}
  </li>
);

const Main: React.FC = () => (
  <div className="resume-main">
    <section>
      <h2>Professional Experience</h2>

      <ul>
        <MainItem
          title="Career Break"
          location="Health Issues"
          time={{ from: new Date('2024-07') }}
        >
          <p>
            Had to figure out a health issue that resulted in me being very tired and fatigued.
            Travelled by bike through Germany after being well again.
          </p>
        </MainItem>

        <MainItem
          title="Backend Developer"
          location="Ampeers Energy GmbH"
          url="https://ampeersenergy.de/"
          time={{ from: new Date('2022-08'), to: new Date('2024-06') }}
        >
          <p>
            Main task: Migrating a JavaScript/REST/OracleDB backend service to
            TypeScript/GraphQL/ArangoDB. Planning, implementing and testing.
          </p>
        </MainItem>

        <MainItem
          title="Lead Full Stack Developer"
          location="Cosuno Ventures GmbH"
          url="https://www.cosuno.com/"
          time={{ from: new Date('2022-01'), to: new Date('2022-07') }}
        >
          <p>
            Apart from developing, I was responsible for discussing new features with product and
            design, making architectural decisions, reviewing code, unblocking team members and
            onboarding new team members.
          </p>
        </MainItem>

        <MainItem
          title="Full Stack Developer"
          location="Cosuno Ventures GmbH"
          url="https://www.cosuno.com/"
          time={{ from: new Date('2021-04'), to: new Date('2021-12') }}
        >
          <p>
            SaaS for construction projects. Building and testing frontend and backend in TypeScript
            in an agile team.
          </p>
        </MainItem>

        <MainItem
          title="Working Student"
          location="QAware GmbH"
          url="https://www.qaware.de/"
          time={{ from: new Date('2019-03'), to: new Date('2019-05') }}
        >
          <p>
            Helping maintain a Java web application for the security checking process for Telekom
            projects. My tasks were mostly front-end centered (SASS, jQuery), but also involved some
            bug-fixing on the backend.
          </p>
        </MainItem>

        <MainItem
          title="WordPress Developer"
          location="CreateRawVision"
          url="https://createrawvision.de/"
          time={{ from: new Date('2018-05'), to: new Date('2022-12') }}
        >
          <p>
            Building and maintaining a WordPress Website for more than 100 members and over 1000
            daily visitors. Notable features include a members area and an integration to a custom
            payment gateway.
          </p>
        </MainItem>
      </ul>
    </section>

    <section>
      <h2>Education</h2>

      <ul>
        <MainItem
          title="B.Sc. Mathematics major, Computer Science minor"
          location="Technical University of Munich"
          url="https://www.tum.de/"
          time={{ from: new Date('2016-10'), to: new Date('2021-02') }}
        >
          <p>Final grade: 1.9</p>
        </MainItem>

        <MainItem
          title="Abitur / A-Levels"
          location="Willibald-Gymnasium Eichstätt"
          url="https://www.willibald-gymnasium.de/"
          time={{ from: new Date('2008-09'), to: new Date('2016-06') }}
        >
          <p>Final grade: 1.4</p>
        </MainItem>
      </ul>
    </section>

    <section>
      <h2>Competitions</h2>

      <ul>
        <MainItem
          title="Winner in state-wide mathematical championship"
          location="Landeswettbewerb Mathematik Bayern"
          url="https://lwmb.de/"
          timeOverride="2013 & 2014"
        />

        <MainItem
          title="Top 100 in national computer science championship 2016"
          location="Bundeswettbewerb Informatik"
          url="https://bwinf.de/bundeswettbewerb/"
          timeOverride="2016"
        />
      </ul>
    </section>
  </div>
);

const PrintButton: React.FC = () => {
  const print = React.useCallback(() => window.print(), []);
  return (
    <div className="print-button">
      <i>You can print me!</i>
      <button type="button" onClick={print}>
        Print
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

export default Page;
