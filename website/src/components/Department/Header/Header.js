import { Col, Row } from '../../shared/grid/grid';
import * as styles from './Header.module.scss';
import React from 'react';
import DepartmentIcon from '../../shared/DepartmentIcon';
import { Title } from '../../shared/typography';

const Header = ({ name, description, iconName }) => {
  return (
    <Row>
      <Col md={12} lg={8}>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
      </Col>
      <Col md={2} lg={4} className={styles.iconContainer}>
        <DepartmentIcon name={iconName} />
      </Col>
    </Row>
  );
};

export default Header;
