import * as React from 'react';
import * as styles from './StartScreen.module.scss';
import classNames from 'classnames';
import Banner from './shared/Banner/Banner';
import { useState, useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { Link } from 'gatsby';

const StartScreen = () => {
  const width = useWindowWidth();
  const sentence = 'ZAPRASZAMY ';

  const [offsets, setOffsets] = useState([
    width,
    width * 2,
    width * 3,
    width * 4,
  ]);

  useEffect(() => {
    setOffsets([width, width * 2, width * 3, width * 4]);
  }, [width]);

  return (
    <Link to="/home" style={{ textDecoration: 'none' }}>
      <div className={styles.imageCover}>
        <div style={{ width: '100%' }}>
          <Banner title={sentence} direction={'toLeft'} />
        </div>
      </div>
      <div className={classNames([styles.imageCover, styles.imageCoverSecond])}>
        <div style={{ width: '100%' }}>
          <p className={styles.staticText}>KATALOG DYPLOMÓW</p>
        </div>
      </div>
      <div className={classNames([styles.imageCover, styles.imageCoverThird])}>
        <div style={{ width: '100%' }}>
          <Banner title={sentence} direction={'toRight'} offset={offsets[3]} />
        </div>
      </div>
      <div className={classNames([styles.imageCover, styles.imageCoverSecond])}>
        <div
          style={{ width: '100%', justifyContent: 'center' }}
          className={styles.staticText}
        >
          ASP WE WROCŁAWIU
        </div>
      </div>
      <div className={classNames([styles.imageCover, styles.imageCoverFifth])}>
        <div style={{ width: '100%' }}>
          <Banner title={sentence} direction={'toLeft'} />
        </div>
      </div>
    </Link>
  );
};

export default StartScreen;
