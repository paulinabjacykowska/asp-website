import React from 'react';
import Ticker from 'react-ticker';
import * as styles from './Banner.module.scss';

const Banner = ({ title, styleBanner, offset, direction, move }) => {
  return (
    <Ticker offset={offset} direction={direction} move={move}>
      {() => (
        <div className={styles.textContainer}>
          <h1 className={styles.text} style={styleBanner}>
            {title}
          </h1>
        </div>
      )}
    </Ticker>
  );
};

export default Banner;
