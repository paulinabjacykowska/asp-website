import * as styles from './EmptyLiked.module.scss';
import * as React from 'react';
import { Col, Row } from '../../shared/grid/grid';
import FavCircle from '../../../assets/images/fac-circle.jpg';
import useIsMobile from '../../../hooks/useIsMobile';
import EmptyLikedMobile from './EmptyLikedMobile/EmptyLikedMobile';

const EmptyLiked = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <EmptyLikedMobile />
      ) : (
        <Row className={styles.marginBottom}>
          <Col xs={4} xsOffset={1}>
            <div className={styles.container}>
              <img src={FavCircle} className={styles.photo} alt="" />
            </div>
          </Col>
          <Col xs={7}>
            <div className={styles.textSection}>
              <div className={styles.title}>
                Nie masz jeszcze polubionych projektów
              </div>
              <div className={styles.author}>
                Dodaj projekt do ulubionych za pomocą przycisku
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default EmptyLiked;
