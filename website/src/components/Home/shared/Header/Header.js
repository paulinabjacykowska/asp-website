import * as React from 'react';
import Ticker from 'react-ticker';
import { StaticImage } from 'gatsby-plugin-image';
import useIsMobile from '../../../../hooks/useIsMobile';
import * as styles from './Header.module.scss';
import FirstBackgroundImage from '../../../../assets/images/main-page-title-image-1.png';
import SecondBackgroundImage from '../../../../assets/images/main-page-title-image-2.png';
import ThirdBackgroundImage from '../../../../assets/images/main-page-title-image-3.png';

const HEADER_IMAGES = [
  FirstBackgroundImage,
  SecondBackgroundImage,
  ThirdBackgroundImage,
];

const Header = ({ bannerText }) => {
  const isMobile = useIsMobile();
  const [randomNumber, setRandomNumber] = React.useState(null);
  React.useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 3));
  }, []);
  return (
    <>
      <div className={styles.headerContainer}>
        {isMobile ? (
          <StaticImage
            src="../../../../assets/images/main-page-title-image-mobile.png"
            alt="main-page-title"
            className={styles.image}
          />
        ) : (
          <img
            src={HEADER_IMAGES[randomNumber]}
            alt="main-page-title"
            className={styles.image}
          />
        )}

        <div className={styles.bannerContainer}>
          <Ticker direction="toRight" offset="100">
            {() => (
              <div className={styles.marquee}>
                <h1>{bannerText}</h1>
              </div>
            )}
          </Ticker>
        </div>
        <h1
          style={
            randomNumber === 0
              ? {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #ff5100 0)',
                }
              : randomNumber === 1
              ? {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #0500FF 0)',
                }
              : {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #4FFDBE 0)',
                }
          }
          className={styles.headerTitle}
        >
          KATALOG DYPLOMÓW
        </h1>

        <h1
          style={
            randomNumber === 0
              ? {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #ff5100 0)',
                }
              : randomNumber === 1
              ? {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #0500FF 0)',
                }
              : {
                  background:
                    'linear-gradient(to right, black calc(100% - 47vw), #4FFDBE 0)',
                }
          }
          className={styles.headerSubtitle}
        >
          Akademii Sztuk Pięknych im. Eugeniusza Gepperta we Wrocławiu
        </h1>
      </div>
    </>
  );
};

export default Header;
