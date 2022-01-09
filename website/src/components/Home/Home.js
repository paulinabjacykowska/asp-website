import Layout from '../shared/Layout/Layout';
import * as React from 'react';
import Seo from '../shared/Seo';
import Header from './shared/Header/Header';
import { useMemo, useState } from 'react';
import AboutUs from './shared/AboutUs';
import FieldOfStudySelector from '../shared/FieldOfStudySelector';
import { graphql, useStaticQuery } from 'gatsby';
import { mapStrapiIdToId } from '../../utils/strapi';
import useAsyncDegrees from '../../hooks/useAsyncDegrees';
import GoToButton from '../shared/buttons/GoToButton';
import { ROUTES } from '../../constants';
import DiplomasList from '../shared/DiplomasList';
import ExhibitionTicker from './shared/ExhibitionTicker';
import providers from '../../utils/providers';

const Home = () => {
  const { strapiHome, allStrapiFieldOfStudy } = useStaticQuery(homeQuery);
  const fieldsOfStudy = useMemo(
    () => allStrapiFieldOfStudy.nodes.map(mapStrapiIdToId),
    [allStrapiFieldOfStudy]
  );

  const [selectedFieldOfStudy, setSelectedFieldOfStudy] = useState(null);
  const asyncDegrees = useAsyncDegrees({
    fieldOfStudyId: selectedFieldOfStudy?.id,
  });

  return (
    <Layout withMargin={false}>
      <Seo title="Home" />
      <Header bannerText={strapiHome.title_banner_text} />
      <AboutUs description={strapiHome.description} />
      <FieldOfStudySelector
        fieldsOfStudy={fieldsOfStudy}
        selectedFieldOfStudy={selectedFieldOfStudy}
        onFieldOfStudyChange={setSelectedFieldOfStudy}
      />
      <GoToButton title="Wszystkie projekty" to={ROUTES.archive} />

      <DiplomasList
        asyncDegrees={asyncDegrees}
        desktopDivider={
          <ExhibitionTicker>{strapiHome.content_banner_text}</ExhibitionTicker>
        }
        displayFarfocle
      />
    </Layout>
  );
};

const homeQuery = graphql`
  query {
    strapiHome {
      description
      title_banner_text
      content_banner_text
    }

    allStrapiFieldOfStudy(sort: { fields: name }) {
      nodes {
        strapiId
        name
      }
    }
  }
`;

export default providers(Home);
