import React from 'react';
import { Fade } from 'react-swift-reveal';

const Title: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Fade duration={1000}>
    <h2 className="section-title">{children}</h2>
  </Fade>
);

export default Title;
