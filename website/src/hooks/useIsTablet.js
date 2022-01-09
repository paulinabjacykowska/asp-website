import useWindowWidth from './useWindowWidth';

const TABLET_BREAKPOINT = 955;

const useIsTablet = () => {
  const width = useWindowWidth();
  return width === null ? false : width <= TABLET_BREAKPOINT;
};

export default useIsTablet;
