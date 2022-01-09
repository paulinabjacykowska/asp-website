import * as React from 'react';
import * as styles from './DegreeTile.module.scss';
import { Row, Col } from '../../../shared/grid/grid';
import Arrow from '../../../../assets/svg/arrow-right.svg';
import { Link } from 'gatsby';
import {
  DEGREE_MEDIA_TYPES,
  IMAGES_BACKEND_URL,
  ROUTES,
} from '../../../../constants';
import classNames from 'classnames';
import { generateSlug } from '../../../../utils/strapi';

const DegreeTileOnePhoto = ({ isRightPhoto, diploma_id }) => {
  const { degree_placeholder } = diploma_id;

  const imageUrl = {
    [DEGREE_MEDIA_TYPES.picture]: () => degree_placeholder[0].picture.url,
    [DEGREE_MEDIA_TYPES.gallery]: () => degree_placeholder[0].pictures[0].url,
  }[diploma_id.degree_placeholder[0].__component]();
  return (
    <Row
      className={classNames(
        styles.marginBottom,
        isRightPhoto && styles.reverse
      )}
    >
      <Col xs={7}>
        <div className={styles.container}>
          <Link
            to={
              ROUTES.diplomaDetails +
              '/' +
              generateSlug(diploma_id.id, diploma_id.title)
            }
          >
            <img
              src={IMAGES_BACKEND_URL + imageUrl}
              className={styles.photo}
              alt=""
            />
          </Link>
        </div>
      </Col>
      <Col
        xs={5}
        className={classNames(
          styles.textSection,
          isRightPhoto && styles.textSectionReverse
        )}
      >
        <div className={styles.title}>
          <p>{diploma_id.title}</p>
        </div>
        <div className={styles.author}>{diploma_id.author}</div>
        <div className={styles.links}>
          {diploma_id.contacts.map(link => (
            <a href={'https://' + link.contact} className={styles.row}>
              <Arrow className={styles.arrow} />
              <div className={styles.linkText}>{link.contact}</div>
            </a>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default DegreeTileOnePhoto;
