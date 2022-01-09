import Layout from '../shared/Layout';
import React, { useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './Archive.module.scss';
import { Col, Grid, Row } from '../shared/grid/grid';
import FieldFilters from './FieldFilters';
import YearFilters from './YearFilters';
import useAsyncDegrees from '../../hooks/useAsyncDegrees';
import providers from '../../utils/providers';
import { mapDegreesToYears } from '../../utils/strapi';
import DiplomasList from '../shared/DiplomasList';
import { Subtitle } from '../shared/typography';

const Archive = () => {
  const { allStrapiDegree, allStrapiDepartment, allStrapiFieldOfStudy } =
    useStaticQuery(archiveQuery);
  const years = useMemo(
    () => mapDegreesToYears(allStrapiDegree.nodes),
    [allStrapiDegree]
  );

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState(null);

  const asyncDegrees = useAsyncDegrees({
    yearId: selectedYear,
    departmentId: selectedFieldOfStudy?.id ? null : selectedDepartment?.id,
    fieldOfStudyId: selectedFieldOfStudy?.id,
  });

  return (
    <Layout darkTheme>
      <Grid fluid className={styles.root}>
        <Col xs={12}>
          <h1 className={styles.pageTitle}>Katalog dyplomów</h1>
          <Row>
            <Subtitle style={{ marginLeft: '16px' }}>Rok</Subtitle>
          </Row>
          <YearFilters
            years={years}
            year={selectedYear}
            onChangeYear={year =>
              setSelectedYear(prev => (prev === year ? null : year))
            }
          />
        </Col>

        <FieldFilters
          departments={allStrapiDepartment.nodes}
          department={selectedDepartment}
          fieldsOfStudy={allStrapiFieldOfStudy.nodes}
          fieldOfStudy={selectedFieldOfStudy}
          onChangeDepartment={department => {
            setSelectedDepartment(
              department === selectedDepartment ? null : department
            );
            setSelectedFieldOfStudy(null);
          }}
          onChangeFieldOfStudy={(fieldOfStudy, department) => {
            setSelectedDepartment(department);
            setSelectedFieldOfStudy(
              selectedFieldOfStudy === fieldOfStudy ? null : fieldOfStudy
            );
          }}
        />

        <DiplomasList asyncDegrees={asyncDegrees} />
      </Grid>
    </Layout>
  );
};

const archiveQuery = graphql`
  query {
    allStrapiDegree {
      nodes {
        year
      }
    }
    allStrapiDepartment {
      nodes {
        strapiId
        name
      }
    }
    allStrapiFieldOfStudy {
      nodes {
        strapiId
        name
        department {
          id
        }
      }
    }
  }
`;

export default providers(Archive);
