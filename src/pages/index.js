import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import { PortfolioProvider } from '../context/context';
import { headData, heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const PageIndex = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

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
  const { title, lang, description } = headData;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description} />
    </>
  );
};
