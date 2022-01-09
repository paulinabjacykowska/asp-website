import * as React from 'react';
import * as styles from '../HeaderWithIcons/HeaderWithIcons.module.scss';
import CircleIconButton from '../../shared/buttons/CircleIconButton/CircleIconButton';
import FavouriteIcon from '../../../assets/svg/favourite.svg';
import FavouriteIconSmall from '../../../assets/svg/favourite-small.svg';
import MusicIcon from '../../../assets/svg/music.svg';
import MusicIconSmall from '../../../assets/svg/music-small.svg';
import useLikedDiploma from '../../../hooks/useLikedDiploma';

const HeaderWithIcons = ({ isMobile, strapiDegree }) => {
  const { changeDiplomaState, checkInLocalStorage } = useLikedDiploma();
  const idDiploma = strapiDegree.strapiId;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titlesContainer}>
        <h3 className={styles.title}>{strapiDegree.title}</h3>
        <h4 className={styles.subtitle}>{strapiDegree.author}</h4>
      </div>
      <div className={styles.iconsContainer}>
        <CircleIconButton
          icon={isMobile ? FavouriteIconSmall : FavouriteIcon}
          iconFill
          isActive={checkInLocalStorage(idDiploma)}
          style={
            isMobile
              ? { marginRight: 20, width: 46, height: 46 }
              : { marginRight: 70 }
          }
          onClick={() => changeDiplomaState(strapiDegree.strapiId)}
        />
        <CircleIconButton
          icon={isMobile ? MusicIconSmall : MusicIcon}
          style={
            isMobile
              ? { marginRight: 20, width: 46, height: 46 }
              : { marginRight: 70 }
          }
          iconFill
        />
      </div>
    </div>
  );
};

export default HeaderWithIcons;
