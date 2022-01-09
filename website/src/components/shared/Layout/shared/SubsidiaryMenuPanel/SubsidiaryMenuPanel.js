import LanguageButton from '../../../buttons/LanguageButton/LanguageButton';
import IconButton from '../../../buttons/IconButton/IconButton';
import PencilIcon from '../../../../../assets/svg/pencil.svg';
import ArrowIcon from '../../../icons/ArrowIcon/ArrowIcon';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './SubsidiaryMenuPanel.module.scss';
import { LANGUAGES, ROUTES } from '../../../../../constants';
import React, { useState } from 'react';
import { Link } from 'gatsby';

const SubsidiaryMenuPanel = React.forwardRef(
  ({ isNavMenuOpened, onNavMenuSwitch }, ref) => {
    const [language, setLanguage] = useState(LANGUAGES.pl);
    const switchLanguage = () =>
      setLanguage(language === LANGUAGES.en ? LANGUAGES.pl : LANGUAGES.en);

    return (
      <div className={styles.root} ref={ref}>
        <Link to={ROUTES.home} className={styles.aspLogoImgContainer}>
          <StaticImage
            src="../../../../../assets/images/asp-logo.png"
            quality={100}
            alt="ASP Logo"
            className={styles.aspLogoImg}
          />
        </Link>
        <IconButton
          icon={ArrowIcon}
          iconProps={{ isActive: isNavMenuOpened }}
          onClick={() => onNavMenuSwitch && onNavMenuSwitch(!isNavMenuOpened)}
        />

        <div className={styles.divider} />

        <IconButton icon={PencilIcon} />
        <LanguageButton
          language={language}
          onClick={switchLanguage}
          className={styles.languageButton}
        />
      </div>
    );
  }
);

export default SubsidiaryMenuPanel;
