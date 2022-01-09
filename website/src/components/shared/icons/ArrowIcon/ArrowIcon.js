import ArrowIconSvg from '../../../../assets/svg/arrow.svg';
import * as styles from './ArrowIcon.module.scss';
import classNames from 'classnames';
import React from 'react';

const ArrowIcon = ({ isActive, className }) => (
  <ArrowIconSvg
    className={classNames(isActive && styles.iconActive, className)}
  />
);

export default ArrowIcon;
