import React from 'react';
import { Fade } from 'react-swift-reveal';

interface TitleProps {
  title: string;
}

const Title = ({
  title
}: TitleProps) => (
  <Fade bottom duration={1000} distance="0px">
    <h2 className="section-title">{title}</h2>
  </Fade>
);

export default Title;
