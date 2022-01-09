import TitleWrapper from '../../../shared/TitleWrapper';
import * as styles from './GalleryItem.module.scss';
import {
  GALLERY_TYPES,
  IMAGES_BACKEND_URL,
} from '../../../../../../../constants';
import React from 'react';
import classNames from 'classnames';

const TRANSLATE = 8;

const GalleryItem = ({
  diploma,
  imageIndex,
  imageUrl,
  imagesCount,
  type,
  xDirection,
  yDirection,
  isActive,
}) => {
  const baseTranslate = (imagesCount * TRANSLATE) / 3;
  const computedStyles = {
    zIndex: isActive ? 2 : 1,
    transform: getTranslateStyles(
      -xDirection * baseTranslate + xDirection * imageIndex * TRANSLATE,
      -yDirection * baseTranslate + yDirection * imageIndex * TRANSLATE
    ),
  };

  const containerWidthClassName =
    {
      [GALLERY_TYPES.square]: styles.rootSquare,
      [GALLERY_TYPES.rectangleHorizontal]: styles.rootRectangleHorizontal,
      [GALLERY_TYPES.rectangleVertical]: styles.rootRectangleVertical,
    }[type] || styles.rootSquare;

  return (
    <TitleWrapper.Content
      diploma={diploma}
      className={classNames(styles.root, containerWidthClassName)}
      style={computedStyles}
      withTitle={imageIndex === 0}
      withAdditional={
        xDirection === -1 ? imageIndex === 0 : imageIndex === imagesCount - 1
      }
    >
      <img
        src={IMAGES_BACKEND_URL + imageUrl}
        className={styles.image}
        alt=""
      />
    </TitleWrapper.Content>
  );
};

const getTranslateStyles = (translateX, translateY) =>
  `translate(calc(-50% + ${translateX}%), calc(-50% + ${translateY}%))`;

export default GalleryItem;
