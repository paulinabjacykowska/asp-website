import Layout from '../shared/Layout';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import providers from '../../utils/providers';
import * as styles from './Exhibit.module.scss';
import LeftColumn from './shared/LeftColumn/LeftColumn';
import RightColumn from './shared/RightColumn/RightColumn';
import useIsTablet from '../../hooks/useIsTablet';
import { format } from 'date-fns';

const Exhibit = () => {
  const { allStrapiExhibit } = useStaticQuery(exhibitQuery);
  const strapiExhibit = allStrapiExhibit.nodes.slice(-1)[0];
  const isTablet = useIsTablet();
  const start_date = format(
    new Date(strapiExhibit.start_date),
    'dd.MM.yyyy, HH:mm'
  );
  const end_date = format(
    new Date(strapiExhibit.end_date),
    'dd.MM.yyyy, HH:mm'
  );
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <LeftColumn
          isTablet={isTablet}
          strapiExhibit={strapiExhibit}
          start_date={start_date}
          end_date={end_date}
        />
        <RightColumn
          isTablet={isTablet}
          strapiExhibit={strapiExhibit}
          start_date={start_date}
          end_date={end_date}
        />
      </div>
    </Layout>
  );
};

const exhibitQuery = graphql`
  query {
    allStrapiExhibit {
      nodes {
        contacts {
          contact
        }
        description
        end_date
        event {
          event_date
          event_type
        }
        start_date
        title
        media {
          url
        }
        place {
          address
          name
        }
      }
    }
  }
`;

export default providers(Exhibit);
