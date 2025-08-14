import React from 'react';
import { type GatsbySSR, withPrefix } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  const fontFiles = JSON.parse(process.env.FONT_FILES ?? '[]');
  const fontHeadComponents = fontFiles.map(getFontHeadComponent);
  setHeadComponents([...fontHeadComponents]);
};

const getFontHeadComponent = (filename: string) => (
  <link
    key={filename}
    rel="preload"
    href={withPrefix(`/fonts/${filename}`)}
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
);
