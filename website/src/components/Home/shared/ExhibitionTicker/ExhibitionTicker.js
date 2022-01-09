import * as styles from './ExhibitionTicker.module.scss';
import Ticker from 'react-ticker';
import * as React from 'react';

const ExhibitionTicker = ({ children }) => {
  return (
    <div className={styles.container}>
      <Ticker direction="toLeft">
        {() => <div className={styles.text}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default ExhibitionTicker;
