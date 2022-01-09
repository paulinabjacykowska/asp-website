import * as React from 'react';
import Seo from '../shared/Seo';
import Layout from '../shared/Layout';
import HeaderWithDescription from './HeaderWithDescription/HeaderWithDescription';
import DiplomasList from '../shared/DiplomasList';
import { Col, Grid } from '../shared/grid/grid';
import useAsyncDegrees from '../../hooks/useAsyncDegrees';
import { useMemo, useState } from 'react';
import YearFilters from '../Archive/YearFilters';
import { mapDegreesToYears } from '../../utils/strapi';
import { graphql, useStaticQuery } from 'gatsby';

const BestDiplomas = () => {
  const { allStrapiDegree, strapiBestDegrees } = useStaticQuery(archiveQuery);
  const years = useMemo(
    () => mapDegreesToYears(allStrapiDegree.nodes),
    [allStrapiDegree]
  );
  const [selectedYear, setSelectedYear] = useState(null);

  const asyncDegrees = useAsyncDegrees({
    yearId: selectedYear,
    bestDegree: true,
  });

  return (
    <Layout darkTheme>
      <Grid>
        <Seo title="Diploma Details" />
        <Col xs={12}>
          <HeaderWithDescription data={strapiBestDegrees.description} />
          <YearFilters
            years={years}
            year={selectedYear}
            onChangeYear={year =>
              setSelectedYear(prev => (prev === year ? null : year))
            }
          />
        </Col>
        <DiplomasList asyncDegrees={asyncDegrees} />
      </Grid>
    </Layout>
  );
};

const archiveQuery = graphql`
  query {
    strapiBestDegrees {
      description
    }
    allStrapiDegree {
      nodes {
        year
      }
    }
  }
`;

export default BestDiplomas;
