import React from 'react';
import * as styles from './DegreeMobile.module.scss';
import Arrow from '../../../../assets/svg/arrow-right.svg';
import { Link } from 'gatsby';
import { Col } from '../../../shared/grid/grid';
import {
  BACKEND_URL,
  DEGREE_MEDIA_TYPES,
  IMAGES_BACKEND_URL,
  ROUTES,
} from '../../../../constants';
import { generateSlug } from '../../../../utils/strapi';

const DegreeMobile = ({ diploma_id }) => {
  const { degree_placeholder, title, author, contacts } = diploma_id;
  const imageUrl = {
    [DEGREE_MEDIA_TYPES.picture]: () => degree_placeholder[0].picture.url,
    [DEGREE_MEDIA_TYPES.gallery]: () => degree_placeholder[0].pictures[0].url,
  }[diploma_id.degree_placeholder[0].__component]();
  return (
    <Col xs={12}>
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
        <div className={styles.title}>{diploma_id.title}</div>
        <div className={styles.author}>{diploma_id.author}</div>
        <div>
          {diploma_id.contacts.map(link => (
            <a href={'https://' + link.contact} className={styles.link}>
              <Arrow className={styles.arrow} />
              <div className={styles.linkText}>{link.contact}</div>
            </a>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default DegreeMobile;
