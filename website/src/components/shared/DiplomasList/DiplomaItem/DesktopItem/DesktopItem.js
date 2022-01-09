import GalleryContent from './GalleryContent';
import * as React from 'react';
import { DEGREE_MEDIA_TYPES } from '../../../../../constants';
import { Col } from '../../../grid/grid';
import * as styles from './DesktopItem.module.scss';
import PictureContent from './PictureContent';

const DesktopItem = ({ diploma, index, displayFarfocle }) => {
  const diplomaContent = {
    [DEGREE_MEDIA_TYPES.picture]: () => (
      <PictureContent
        diploma={diploma}
        index={index}
        displayFarfocle={displayFarfocle}
      />
    ),
    [DEGREE_MEDIA_TYPES.gallery]: () => <GalleryContent diploma={diploma} />,
  }[diploma.degree_placeholder[0].__component]();
  return (
    <Col md={12} lg={6} className={styles.container}>
      {diplomaContent}
    </Col>
  );
};

export default DesktopItem;
