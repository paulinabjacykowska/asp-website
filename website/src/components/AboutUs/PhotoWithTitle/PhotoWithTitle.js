import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './PhotoWithTitle.module.scss';
import useIsSmallTablet from '../useIsSmallTablet';
import historyImage from '../../../assets/images/historia.png';

const PhotoWithTitle = ({ title, isAboutUs }) => {
  const isSmallTablet = useIsSmallTablet();
  return (
    <>
      <div className={styles.headerContainer}>
        {isAboutUs ? (
          <h1
            className={styles.headerTitle}
            style={isSmallTablet ? { marginLeft: '39%' } : {}}
          >
            {title}
          </h1>
        ) : (
          <h1
            className={styles.headerTitle}
            style={
              isSmallTablet
                ? {
                    top: '50px',
                    marginLeft: 0,
                    background:
                      'linear-gradient(to right, black calc(100% - 65vw), #4FFDBE 0)',
                  }
                : {
                    top: '50px',
                    marginLeft: 0,
                    background:
                      'linear-gradient(to right, black calc(100% - 50vw), #4FFDBE 0)',
                  }
            }
          >
            {title}
          </h1>
        )}
        {isAboutUs ? (
          <StaticImage
            src="../../../assets/images/Rektorat_i_Wydzialy_ASP.png"
            alt="about us"
            className={styles.image}
          />
        ) : (
          <div
            className={styles.image}
            style={
              isSmallTablet
                ? { marginLeft: 'calc(100% - 65vw)' }
                : { marginLeft: 'calc(100% - 50vw)' }
            }
          >
            <img src={historyImage} alt="history" />
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoWithTitle;
