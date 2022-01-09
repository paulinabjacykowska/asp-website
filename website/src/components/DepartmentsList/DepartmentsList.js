import Layout from '../shared/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import DepartmentLink from './DepartmentLink';
import React from 'react';
import { generateSlug } from '../../utils/strapi';
import { Grid, Row } from '../shared/grid/grid';
import providers from '../../utils/providers';
import { ROUTES } from '../../constants';

const DepartmentsList = () => {
  const { allStrapiDepartment } = useStaticQuery(departmentsListQuery);

  return (
    <Layout>
      <Grid fluid>
        <Row>
          {allStrapiDepartment.nodes.map(department => (
            <DepartmentLink
              key={department.strapiId}
              department={department}
              href={`${ROUTES.departments}/${generateSlug(
                department.strapiId,
                department.name
              )}`}
            />
          ))}
        </Row>
      </Grid>
    </Layout>
  );
};

const departmentsListQuery = graphql`
  query {
    allStrapiDepartment {
      nodes {
        strapiId
        name
        theme
        icon
      }
    }
  }
`;

export default providers(DepartmentsList);
