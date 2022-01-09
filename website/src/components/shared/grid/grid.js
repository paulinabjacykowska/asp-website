import * as styles from './grid.module.scss';
import * as Fb from 'react-flexbox-grid';
import classNames from 'classnames';
import React from 'react';

export const Container = ({ className, children, ...props }) => (
  <div className={classNames(styles.container, className)} {...props}>
    <div className={styles.containerContent}>{children}</div>
  </div>
);

export const Grid = ({ className, ...props }) => (
  <Fb.Grid fluid className={classNames(styles.grid, className)} {...props} />
);

export const Row = ({ className, ...props }) => (
  <Fb.Row className={classNames(styles.row, className)} {...props} />
);

export const Col = ({ className, ...props }) => (
  <Fb.Col className={classNames(styles.column, className)} {...props} />
);
//rozmiary dla col to xs-telefon, md-tablet, lg - ekran kompa
