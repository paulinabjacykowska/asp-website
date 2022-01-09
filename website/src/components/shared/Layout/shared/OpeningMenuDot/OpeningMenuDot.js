import React from 'react';
import * as styles from './OpeningMenuDot.module.scss';
import useInvertedTheme from '../../../../../hooks/useInvertedTheme';
import classNames from 'classnames';

const OpeningMenuDot = ({ onClick }) => {
  const isInverted = useInvertedTheme();

  return (
    <button
      className={classNames(styles.button, isInverted && styles.buttonInverted)}
      onClick={onClick}
      aria-label="menu"
    />
  );
};

export default OpeningMenuDot;
