import * as React from 'react';
import * as styles from './MediaItem.module.scss';

const MediaItem = ({ url, marginLeft }) => {
  return (
    <div className={styles.mediaContainer}>
      <img
        style={{ marginLeft: marginLeft }}
        className={styles.media}
        src={url}
        alt="media"
      />
    </div>
  );
};

export default MediaItem;
