import useIsMobile from '../../../../hooks/useIsMobile';
import MobileItem from './MobileItem';
import * as React from 'react';
import DesktopItem from './DesktopItem';

const DiplomaItem = ({ diploma, index, displayFarfocle }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileItem diploma={diploma} />
  ) : (
    <DesktopItem
      diploma={diploma}
      index={index}
      displayFarfocle={displayFarfocle}
    />
  );
};

export default DiplomaItem;
