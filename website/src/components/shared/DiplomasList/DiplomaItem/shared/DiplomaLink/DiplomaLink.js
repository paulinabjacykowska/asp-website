import * as styles from './DiplomaLink.module.scss';
import { ROUTES } from '../../../../../../constants';
import { generateSlug } from '../../../../../../utils/strapi';
import { Link } from 'gatsby';
import * as React from 'react';
import classNames from 'classnames';

const DiplomaLink = ({ diploma, children, className, style }) => {
  return (
    <Link
      className={classNames(styles.container, className)}
      to={`${ROUTES.diplomas}/${generateSlug(diploma.id, diploma.title)}`}
      state={{ diplomaId: diploma.id }}
      style={style}
    >
      {children}
    </Link>
  );
};

export default DiplomaLink;
