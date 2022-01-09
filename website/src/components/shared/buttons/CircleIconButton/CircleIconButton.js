import * as styles from './CircleIconButton.module.scss';
import * as React from 'react';
import classNames from 'classnames';

const CircleIconButton = ({
  icon: Icon,
  iconFill,
  isActive,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.button, iconFill && styles.iconFill)}
      {...buttonProps}
    >
      <Icon
        className={classNames(
          styles.icon,
          iconFill && styles.iconFill,
          isActive && styles.isActiveStroke,
          isActive && iconFill && styles.isActiveFillIcon
        )}
      />
    </button>
  );
};
export default CircleIconButton;
