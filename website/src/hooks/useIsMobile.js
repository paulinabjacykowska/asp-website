import useWindowWidth from './useWindowWidth';

const MOBILE_BREAKPOINT = 576;

const useIsMobile = () => {
  const width = useWindowWidth();
  return width === null ? false : width <= MOBILE_BREAKPOINT;
};

export default useIsMobile;
