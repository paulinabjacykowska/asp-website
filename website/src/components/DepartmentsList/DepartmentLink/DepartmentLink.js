import { Link } from 'gatsby';
import React from 'react';
import * as styles from './DepartmentLink.module.scss';
import { Col } from '../../shared/grid/grid';
import { DEPARTMENT_THEMES } from '../../../constants';
import DepartmentIcon from '../../shared/DepartmentIcon';

export const DepartmentLink = ({ href, department }) => {
  const theme = DEPARTMENT_THEMES[department.theme];

  return (
    <Col className={styles.root} xs={12} md={12} lg={6}>
      <Link to={href}>
        <div className={styles.link} style={theme}>
          <DepartmentIcon className={styles.icon} name={department.icon} />
          <div style={{ textDecoration: 'none' }}>{department.name}</div>
        </div>
      </Link>
    </Col>
  );
};

export default DepartmentLink;
