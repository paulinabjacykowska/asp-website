import * as styles from './GoToButton.module.scss';
import { Link } from 'gatsby';
import ArrowRight from '../../../../assets/svg/arrow_right.svg';
import * as React from 'react';

const GoToButton = ({ title, to }) => {
  return (
    <div className={styles.linkContainer}>
      <Link to={to} className={styles.linkButton}>
        {title}
        <ArrowRight style={{ marginLeft: '30px' }} />
      </Link>
    </div>
  );
};

export default GoToButton;
