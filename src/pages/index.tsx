import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { PortfolioProvider } from '../context/context';
import * as data from '../mock/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const PageIndex = () => {
  const [hero, setHero] = useState(data.heroData);
  const [about, setAbout] = useState(data.aboutData);
  const [projects, setProjects] = useState(data.projectsData);
  const [contact, setContact] = useState(data.contactData);
  const [footer, setFooter] = useState(data.footerData);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};
export default PageIndex;

export const Head = () => {
  const { title, lang, description } = data.headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description} />
    </>
  );
};
