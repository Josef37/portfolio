import fs from 'fs';
import { type GatsbyNode } from 'gatsby';
import path from 'path';

export const onPreInit: GatsbyNode['onPreInit'] = () => {
  process.env.FONT_FILES = JSON.stringify(
    fs.readdirSync(path.resolve(__dirname, 'static', 'fonts')),
  );
};
