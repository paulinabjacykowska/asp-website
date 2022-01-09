import { Col } from '../../../shared/grid/grid';
import * as styles from '../../shared/DegreeMobile/DegreeMobile.module.scss';
import React from 'react';
import FavCircle from '../../../../assets/images/fac-circle.jpg';

const EmptyLikedMobile = () => {
  return (
    <Col xs={12}>
      <div className={styles.container}>
        <div className={styles.photoContainer}>
          <img src={FavCircle} className={styles.photo} alt="" />
        </div>
        <div className={styles.title}>
          Nie masz jeszcze polubionych projektów
        </div>
        <div className={styles.author}>
          Dodaj projekt do ulubionych za pomocą przycisku
        </div>
      </div>
    </Col>
  );
};

export default EmptyLikedMobile;
