import * as React from 'react';
import MediaItem from './MediaItem/MediaItem';
import * as styles from './MediaList.module.scss';

const MediaList = ({ media }) => {
  let fixedMedia = media[0].pictures ? media[0].pictures : media[0].picture;

  return (
    <div className={styles.mediaListContainer}>
      {fixedMedia.length > 1 ? (
        fixedMedia.map((picture, index) => (
          <MediaItem
            url={picture.url}
            marginLeft={index % 3 === 0 ? '25vw' : '0'}
          />
        ))
      ) : (
        <MediaItem url={fixedMedia.url} marginLeft={'0'} />
      )}
    </div>
  );
};

export default MediaList;
