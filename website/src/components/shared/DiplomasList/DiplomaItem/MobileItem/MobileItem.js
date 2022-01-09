import * as styles from './MobileItem.module.scss';
import React from 'react';
import {
  DEGREE_MEDIA_TYPES,
  IMAGES_BACKEND_URL,
} from '../../../../../constants';
import { Col } from '../../../grid/grid';
import DiplomaLink from '../shared/DiplomaLink';

const MobileItem = ({ diploma }) => {
  const { degree_placeholder } = diploma;

  const imageUrl = {
    [DEGREE_MEDIA_TYPES.picture]: () => degree_placeholder[0].picture.url,
    [DEGREE_MEDIA_TYPES.gallery]: () => degree_placeholder[0].pictures[0].url,
  }[diploma.degree_placeholder[0].__component]();

  return (
    <Col xs={12}>
      <DiplomaLink diploma={diploma}>
        <h4 className={styles.author}>
          {diploma.author} / {diploma.fieldOfStudy}
        </h4>
        <img
          src={IMAGES_BACKEND_URL + imageUrl}
          className={styles.image}
          alt=""
        />
        <h3 className={styles.title}>{diploma.title}</h3>
      </DiplomaLink>
    </Col>
  );
};

export default MobileItem;
