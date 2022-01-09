import '../../../styles/index.scss';
import SubsidiaryMenuPanel from './shared/SubsidiaryMenuPanel/SubsidiaryMenuPanel';
import { Container } from '../grid/grid';
import React, { useEffect, useRef, useState } from 'react';
import Footer from '../Layout/shared/Footer/Footer';
import OpeningMenuDot from './shared/OpeningMenuDot';
import NavigationMenu from './shared/NavigationMenu';
import * as styles from './Layout.module.scss';
import classNames from 'classnames';

const Layout = ({ children, darkTheme, withMargin = true, style }) => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  const navigationMenuRef = useRef(null);
  const subsidiaryMenuRef = useRef(null);

  useEffect(() => {
    if (!isNavMenuOpened) return;

    const handleClickOutside = event => {
      if (
        navigationMenuRef.current &&
        !navigationMenuRef.current.contains(event.target) &&
        !subsidiaryMenuRef.current.contains(event.target)
      ) {
        setIsNavMenuOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsNavMenuOpened, isNavMenuOpened]);

  return (
    <div
      className={classNames(styles.root, withMargin && styles.rootWithMargin)}
      style={style}
    >
      <Container>{children}</Container>
      <Footer darkTheme={darkTheme} />

      <OpeningMenuDot onClick={() => setIsNavMenuOpened(true)} />
      <NavigationMenu
        ref={navigationMenuRef}
        isOpened={isNavMenuOpened}
        onClickClose={() => setIsNavMenuOpened(false)}
      />
      <SubsidiaryMenuPanel
        ref={subsidiaryMenuRef}
        isNavMenuOpened={isNavMenuOpened}
        onNavMenuSwitch={setIsNavMenuOpened}
      />
    </div>
  );
};

export default Layout;
