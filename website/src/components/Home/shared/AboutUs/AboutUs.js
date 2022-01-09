import * as styles from './AboutUs.module.scss';
import * as React from 'react';
import TwoColumnsText from '../../../shared/TwoColumnsText/TwoColumnsText';

const AboutUs = ({ description }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>O nas</h1>
      <TwoColumnsText description={description} />
    </div>
  );
};

export default AboutUs;
