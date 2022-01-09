import * as styles from './FilterButtonStyle.module.scss';
import * as React from 'react';
import classNames from 'classnames';
import useInvertedTheme from '../../../../hooks/useInvertedTheme';

const FilterButton = ({ title, isActive, className, ...buttonProps }) => {
  const isInverted = useInvertedTheme();

  return (
    <button
      className={classNames(
        styles.button,
        isInverted && styles.buttonInverted,
        isActive &&
          (isInverted ? styles.buttonActiveInverted : styles.buttonActive),
        className
      )}
      {...buttonProps}
    >
      <p className={styles.buttonText}>{title}</p>
    </button>
  );
};

export default FilterButton;
