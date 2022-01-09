import { useEffect, useState, createContext, useContext } from 'react';
import React from 'react';

const WindowWidthContext = createContext(window?.innerWidth);

const useWindowWidth = () => useContext(WindowWidthContext);

export const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export default useWindowWidth;
