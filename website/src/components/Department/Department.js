import React, { useMemo, useState } from 'react';
import Layout from '../shared/Layout';
import { graphql } from 'gatsby';
import Header from './Header';
import { mapStrapiIdToId } from '../../utils/strapi';
import FieldOfStudySelector from '../shared/FieldOfStudySelector';
import useAsyncDegrees from '../../hooks/useAsyncDegrees';
import { DEPARTMENT_THEMES } from '../../constants';
import providers from '../../utils/providers';
import useInvertedTheme from '../../hooks/useInvertedTheme';
import { Grid, Row } from '../shared/grid/grid';
import DiplomasList from '../shared/DiplomasList';

const Department = ({ data: { strapiDepartment, allStrapiFieldOfStudy } }) => {
  const theme = DEPARTMENT_THEMES[strapiDepartment.theme];

  useInvertedTheme(theme.inverted);
  const fieldsOfStudy = useMemo(
    () => allStrapiFieldOfStudy.nodes.map(mapStrapiIdToId),
    [allStrapiFieldOfStudy.nodes]
  );

  const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState(null);
  const asyncDegrees = useAsyncDegrees({
    departmentId: strapiDepartment.strapiId,
    fieldOfStudyId: selectedFieldOfStudy?.id,
  });

  return (
    <Layout style={theme} darkTheme>
      <Grid>
        <Header
          name={strapiDepartment.name}
          description={strapiDepartment.description}
          iconName={strapiDepartment.icon}
        />
        {fieldsOfStudy.length > 1 && (
          <Row>
            <FieldOfStudySelector
              fieldsOfStudy={fieldsOfStudy}
              selectedFieldOfStudy={selectedFieldOfStudy}
              onFieldOfStudyChange={setSelectedFieldOfStudy}
            />
          </Row>
        )}
      </Grid>

      <DiplomasList
        asyncDegrees={asyncDegrees}
        backgroundColor={theme.background}
        elementColor={theme.color}
      />
    </Layout>
  );
};

export const query = graphql`
  query Department($id: Int!) {
    strapiDepartment(strapiId: { eq: $id }) {
      strapiId
      name
      description
      icon
      theme
    }

    allStrapiFieldOfStudy(
      filter: { department: { id: { eq: $id } } }
      sort: { fields: name }
    ) {
      nodes {
        strapiId
        name
      }
    }
  }
`;

export default providers(Department);
