import * as styles from './NavigationMenu.module.scss';
import React from 'react';
import classNames from 'classnames';
import IconButton from '../../../buttons/IconButton/IconButton';
import CloseIcon from '../../../../../assets/svg/close.svg';
import { ROUTES_MENU } from '../../../../../constants';
import useInvertedTheme from '../../../../../hooks/useInvertedTheme';

const NavigationMenu = React.forwardRef(({ isOpened, onClickClose }, ref) => {
  const isInverted = useInvertedTheme();

  return (
    <nav
      className={classNames(
        styles.root,
        isInverted && styles.rootInverted,
        !isOpened && styles.rootClosed
      )}
      ref={ref}
    >
      <IconButton
        icon={CloseIcon}
        className={styles.closeButton}
        onClick={onClickClose}
      />

      {ROUTES_MENU.map(route => (
        <a key={route.label} href={route.path} className={styles.anchor}>
          {route.label}
        </a>
      ))}
    </nav>
  );
});

export default NavigationMenu;
