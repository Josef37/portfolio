import { useEffect, useState } from 'react';

// Can't access `window` during site generation.
const isBrowser = typeof window !== 'undefined';

// Defining media queries via relative units (e.g. `rem`)
// allows the user default font size to be considered in scaling.
const breakpointInPx = 900;
const breakpointInRem = breakpointInPx / 16;
const mediaQuery = `(max-width: ${breakpointInRem}rem)`; // Parentheses are required...
const mediaQueryList = isBrowser ? window.matchMedia(mediaQuery) : undefined;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(mediaQueryList?.matches ?? true);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    mediaQueryList?.addEventListener('change', onChange);
    return () => mediaQueryList?.removeEventListener('change', onChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
