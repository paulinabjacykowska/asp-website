import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';

const InvertedThemeContext = createContext([false, () => {}]);

export const InvertedThemeProvider = ({ children }) => {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <InvertedThemeContext.Provider value={[isInverted, setIsInverted]}>
      {children}
    </InvertedThemeContext.Provider>
  );
};

const useInvertedTheme = propIsInverted => {
  const [isInverted, setIsInverted] = useContext(InvertedThemeContext);

  useEffect(() => {
    if (propIsInverted === undefined || propIsInverted === null) return;

    setIsInverted(!!propIsInverted);

    return () => setIsInverted(false);
  }, [propIsInverted, setIsInverted]);

  return isInverted;
};

export default useInvertedTheme;
