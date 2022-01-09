import React from 'react';
import classNames from 'classnames';
import * as styles from './LanguageButton.module.scss';
import LanguagesIcon from '../../../../assets/svg/languages.svg';
import { LANGUAGES } from '../../../../constants';

const LanguageButton = ({
  language = LANGUAGES.pl,
  className,
  ...buttonProps
}) => {
  return (
    <button className={classNames(styles.button, className)} {...buttonProps}>
      <LanguagesIcon
        className={classNames(
          styles.icon,
          language === LANGUAGES.pl ? styles.iconPl : styles.iconEn
        )}
      />
    </button>
  );
};

export default LanguageButton;
