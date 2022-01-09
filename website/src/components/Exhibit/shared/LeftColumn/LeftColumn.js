import providers from '../../../../utils/providers';
import { Title, Subtitle } from '../../../shared/typography/typography';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import * as styles from '../../Exhibit.module.scss';
import * as leftColumnStyles from './LeftColumn.module.scss';
import { format } from 'date-fns';

const LeftColumn = ({ isTablet, strapiExhibit, start_date, end_date }) => {
  return (
    <div className={leftColumnStyles.leftColumnContainer}>
      <Subtitle className={leftColumnStyles.subtitle}>
        Nadchodząca wystawa
      </Subtitle>
      <Title className={leftColumnStyles.title}>{strapiExhibit.title}</Title>
      {isTablet ? (
        <div style={{ display: 'flex', columnGap: '50px' }}>
          <div style={{ flex: '50%' }}>
            <h5 className={styles.informationTitle}>start</h5>
            <p className={styles.information}>{start_date}</p>
            <h5 className={styles.informationTitle}>koniec</h5>
            <p className={styles.information}>{end_date}</p>
            <h5 className={styles.informationTitle}>
              {strapiExhibit.place.name}
            </h5>
            <p className={styles.information}>{strapiExhibit.place.address}</p>
          </div>
          <div style={{ flex: '50%' }}>
            {strapiExhibit.event.map((event, key) => (
              <div key={key}>
                <h5 className={styles.informationTitle}>{event.event_type}</h5>
                <p className={styles.information}>
                  {format(new Date(event.event_date), 'dd.MM.yyyy, HH:mm')}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div></div>
          {strapiExhibit.event.map((event, key) => (
            <div key={key}>
              <h5 className={styles.informationTitle}>{event.event_type}</h5>
              <p className={styles.information}>
                {format(new Date(event.event_date), 'dd.MM.yyyy, HH:mm')}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className={leftColumnStyles.mainDescription}>
        <ReactMarkdown>{strapiExhibit.description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default providers(LeftColumn);
