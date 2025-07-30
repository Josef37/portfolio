import type { GatsbySSR } from 'gatsby';
import React from 'react';

const fontFiles = ['Montserrat-Latin.woff2', 'Montserrat-Latin-Italic.woff2'];

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  const fontHeadComponents = fontFiles.map(getFontHeadComponent);
  setHeadComponents([...fontHeadComponents]);
};

const getFontHeadComponent = (filename: string) => (
  <link
    key={filename}
    rel="preload"
    href={`/fonts/${filename}`}
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
);
