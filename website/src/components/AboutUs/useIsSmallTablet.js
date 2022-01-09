import useWindowWidth from '../../hooks/useWindowWidth';

const SMALL_TABLET_BREAKPOINT = 768;

const useIsSmallTablet = () => {
  const width = useWindowWidth();
  return width === null ? false : width <= SMALL_TABLET_BREAKPOINT;
};

export default useIsSmallTablet;
