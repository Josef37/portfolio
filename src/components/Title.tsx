import React from 'react';
import { Fade } from 'react-swift-reveal';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <Fade duration={1000}>
    <h2 className="section-title">{title}</h2>
  </Fade>
);

export default Title;
