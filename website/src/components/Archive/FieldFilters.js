import { Col, Row } from '../shared/grid/grid';
import * as styles from './Archive.module.scss';
import FilterButton from '../shared/buttons/FilterButton/FilterButton';
import React, { useMemo } from 'react';
import { mapStrapiIdToId } from '../../utils/strapi';
import { Subtitle } from '../shared/typography';

export const FieldFilters = ({
  departments,
  fieldsOfStudy,
  department: selectedMainCategory,
  fieldOfStudy: selectedFieldOfStudy,
  onChangeDepartment,
  onChangeFieldOfStudy,
}) => {
  const choicesTree = useMemo(
    () => buildChoicesTree(departments, fieldsOfStudy),
    [departments, fieldsOfStudy]
  );

  return (
    <>
      <Row>
        <Subtitle style={{ marginLeft: '16px' }}>Wydział i kierunek</Subtitle>
      </Row>

      <Row className={styles.section}>
        {choicesTree.map(department => (
          <Col
            key={department.id}
            className={styles.departmentContainer}
            xs={12}
            md={6}
          >
            <FilterButton
              title={department.name}
              isActive={selectedMainCategory === department}
              className={styles.departmentButton}
              onClick={() => onChangeDepartment(department)}
            />
            <div className={styles.fieldOfStudyContainer}>
              {department.fieldsOfStudy.map(fieldOfStudy => (
                <FilterButton
                  key={fieldOfStudy.id}
                  title={fieldOfStudy.name}
                  isActive={selectedFieldOfStudy === fieldOfStudy}
                  className={styles.fieldOfStudyButton}
                  onClick={() => onChangeFieldOfStudy(fieldOfStudy, department)}
                />
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

const buildChoicesTree = (departments, fieldsOfStudy) => {
  const DEFAULT_DEPARTMENT_ID = 'default';

  const mappedDepartments = departments
    .map(mapStrapiIdToId)
    .map(department => ({
      id: department.id,
      name: department.name,
      fieldsOfStudy: [],
    }));
  const nullishDepartment = {
    id: DEFAULT_DEPARTMENT_ID,
    name: 'Pozostałe',
    fieldsOfStudy: [],
  };
  const idToDepartment = Object.fromEntries(
    mappedDepartments.map(department => [department.id, department])
  );

  fieldsOfStudy.map(mapStrapiIdToId).forEach(fieldOfStudy => {
    const department =
      (fieldOfStudy?.department?.id &&
        idToDepartment[fieldOfStudy.department.id]) ||
      nullishDepartment;
    department.fieldsOfStudy.push(fieldOfStudy);
  });

  return [...mappedDepartments, nullishDepartment].filter(
    ({ fieldsOfStudy }) => fieldsOfStudy.length
  );
};

export default FieldFilters;
