import * as styles from './ExactImageContent.module.scss';
import React from 'react';

const ExactImageContent = ({ src, style }) => {
  return <img src={src} alt="" className={styles.image} style={style} />;
};

export default ExactImageContent;
