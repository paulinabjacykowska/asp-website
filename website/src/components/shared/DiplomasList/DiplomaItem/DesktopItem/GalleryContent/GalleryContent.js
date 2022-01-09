import React, { useState } from 'react';
import * as styles from './GalleryContent.module.scss';
import { getRandomNumber, isOdd } from '../../../../../../utils/helpers';
import TitleWrapper from '../../shared/TitleWrapper';
import useInterval from '../../../../../../hooks/useInterval';
import GalleryItem from './GalleryItem';
import classNames from 'classnames';

const GalleryContent = ({ diploma, darkMode }) => {
  const { pictures, type } = diploma.degree_placeholder[0];
  const imageUrls = pictures.map(picture => picture.url);

  const [xDirection] = useState(getRandomNumber(0, 1) ? 1 : -1);
  const [yDirection] = useState(getRandomNumber(0, 1) ? 1 : -1);

  const [currentPhotoId, setCurrentPhotoId] = useState(0);
  useInterval(
    () => setCurrentPhotoId(prev => (prev + 1) % imageUrls.length),
    1000
  );

  return (
    <TitleWrapper.Root
      diploma={diploma}
      className={classNames(styles.root, darkMode && styles.rootDarkMode)}
    >
      {imageUrls.map((url, index) => (
        <GalleryItem
          key={url}
          diploma={diploma}
          imageIndex={index}
          imageUrl={url}
          type={type}
          imagesCount={imageUrls.length}
          xDirection={xDirection}
          yDirection={yDirection}
          isActive={currentPhotoId === index}
        />
      ))}
    </TitleWrapper.Root>
  );
};

export default GalleryContent;
