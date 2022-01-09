import * as styles from './IconButton.module.scss';
import classNames from 'classnames';
import React from 'react';

const IconButton = ({ icon: Icon, className, iconProps, ...buttonProps }) => {
  return (
    <button className={classNames(styles.button, className)} {...buttonProps}>
      <Icon className={styles.icon} {...iconProps} />
    </button>
  );
};

export default IconButton;
