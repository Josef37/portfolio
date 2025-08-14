// `react-swift-reveal` does sometimes not work.
// This component fixes the issue by forcing a re-render when the element becomes visible.
// https://github.com/Mutesa-Cedric/react-swift-reveal/issues/11

import React, { useRef } from 'react';
import { Fade as FadeImport } from 'react-swift-reveal';
import { useIsVisible } from 'react-is-visible';

type Props = Parameters<typeof FadeImport>[0];

const Fade: React.FC<Props> = ({ children, ...props } = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // `useIsVisible` uses the Intersection Observer API.
  // When the state changes, it forces a re-render.
  // That will make the `<Fade>` component re-check.
  useIsVisible(ref, { once: true });

  return (
    <FadeImport {...props}>
      {/* We need an extra wrapper because `react-swift-reveal` overwrites our ref. */}
      <div>
        <div ref={ref}>{children}</div>
      </div>
    </FadeImport>
  );
};

export default Fade;
