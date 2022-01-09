import { Title } from '../typography';
import * as styles from './StateInfo.module.scss';
import React from 'react';

export const STATES = {
  loading: 'loading',
  empty: 'empty',
  error: 'error',
};

const STATE_LABELS = {
  loading: 'ŁADOWANIE STRONY',
  empty: 'NICZEGO TU NIE MA',
  error: 'WYSTĄPIŁY BŁĘDY!',
};

const StateInfo = ({
  state = STATES.loading,
  backgroundColor = 'white',
  elementColor = 'black',
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content} style={{ background: backgroundColor }}>
        <div className={styles.figure} style={{ background: elementColor }} />
        <Title className={styles.title}>{STATE_LABELS[state]}</Title>
      </div>
    </div>
  );
};

export default StateInfo;
