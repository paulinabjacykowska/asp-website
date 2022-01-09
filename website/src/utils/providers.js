import { WindowWidthProvider } from '../hooks/useWindowWidth';
import { InvertedThemeProvider } from '../hooks/useInvertedTheme';
import React from 'react';

const providers = Component => {
  return props => (
    <WindowWidthProvider>
      <InvertedThemeProvider>
        <Component {...props} />
      </InvertedThemeProvider>
    </WindowWidthProvider>
  );
};

export default providers;
