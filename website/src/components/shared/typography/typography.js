import classNames from 'classnames';
import * as styles from './typography.module.scss';
import React from 'react';

export const Title = ({ className, children, ...props }) => (
  <h1 className={classNames(styles.title, className)} {...props}>
    {children}
  </h1>
);

export const Subtitle = ({ className, children, ...props }) => (
  <h2 className={classNames(styles.subtitle, className)} {...props}>
    {children}
  </h2>
);
