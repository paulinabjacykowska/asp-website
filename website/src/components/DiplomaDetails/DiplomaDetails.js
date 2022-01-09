import * as React from 'react';
import Seo from '../shared/Seo';
import Layout from '../shared/Layout';
import useIsMobile from '../../hooks/useIsMobile';
import { graphql } from 'gatsby';
import HeaderWithIcons from './HeaderWithIcons/HeaderWithIcons';
import Description from './Description';
import providers from '../../utils/providers';
import {
  DIPLOMA_BACKGROUND_THEMES,
  DIPLOMA_LINES_THEMES,
} from '../../constants';
import * as styles from './DiplomaDetails.module.scss';
import useWindowWidth from '../../hooks/useWindowWidth';
import MediaList from './MediaList/MediaList';

const DiplomaDetails = ({ data: { strapiDegree } }) => {
  const isMobile = useIsMobile();
  const backgroundTheme = DIPLOMA_BACKGROUND_THEMES[strapiDegree.theme];
  const linesTheme = DIPLOMA_LINES_THEMES[strapiDegree.theme];
  const windowWidth = useWindowWidth();

  let linesNumberArray = [];
  for (let i = 0; i <= Math.floor(windowWidth / 100); i++) {
    linesNumberArray.push(i);
  }

  return (
    <Layout style={backgroundTheme} darkTheme>
      <Seo title="Diploma Details" />
      {linesNumberArray.map((_, index) =>
        isMobile ? (
          <div></div>
        ) : (
          <div
            key={index}
            className={styles.verticalLines}
            style={{
              ...linesTheme,
              ...{
                marginLeft: Math.round(Math.random())
                  ? 250 * index
                  : 150 * index,
              },
            }}
          ></div>
        )
      )}
      <HeaderWithIcons
        theme={strapiDegree.theme}
        isMobile={isMobile}
        strapiDegree={strapiDegree}
      />
      <Description strapiDegree={strapiDegree} />
      {strapiDegree.degree_media.length > 0 ? (
        <MediaList media={strapiDegree.degree_media} />
      ) : (
        ''
      )}
    </Layout>
  );
};

export const query = graphql`
  query DiplomaDetails($id: Int!) {
    strapiDegree(strapiId: { eq: $id }) {
      best_degree
      author
      contacts {
        contact
      }
      degree_media
      description
      field_of_study {
        name
      }
      promoters {
        promoter_name
        subtitle
        title
      }
      title
      year
      strapiId
      theme
    }
  }
`;

export default providers(DiplomaDetails);
