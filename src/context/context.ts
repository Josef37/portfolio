import React from 'react';
import type * as data from '../mock/data';

interface PortfolioContextArgs {
  hero?: typeof data.heroData;
  about?: typeof data.aboutData;
  projects?: typeof data.projectsData;
  contact?: typeof data.contactData;
  footer?: typeof data.footerData;
}

const PortfolioContext = React.createContext<PortfolioContextArgs>({});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
