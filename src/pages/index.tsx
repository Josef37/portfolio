import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { head } from '../data/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const PageIndex: React.FC = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);
export default PageIndex;

export const Head: React.FC = () => (
  <>
    <meta charSet="utf-8" />
    <title>{head.title}</title>
    <html lang={head.lang} />
    <meta name="description" content={head.description} />
  </>
);
