import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const useIsMobile = () => {
  // Can't use `window` during SSR.
  if (!isBrowser) {
    return true;
  }

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 770);
  }, [window.innerWidth]);

  return isMobile;
};

export default useIsMobile;
