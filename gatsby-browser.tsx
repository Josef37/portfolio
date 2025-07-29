import type { GatsbyBrowser } from 'gatsby';

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
};
