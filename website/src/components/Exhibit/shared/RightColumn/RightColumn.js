import React from 'react';
import providers from '../../../../utils/providers';
import * as styles from '../../Exhibit.module.scss';
import * as rightColumnStyles from './RightColumn.module.scss';
import useIsMobile from '../../../../hooks/useIsMobile';

const RightColumn = ({ isTablet, strapiExhibit, start_date, end_date }) => {
  const isMobile = useIsMobile();

  return (
    <div className={rightColumnStyles.rightColumnContainer}>
      {isTablet ? (
        <div></div>
      ) : (
        <div>
          <h5 className={styles.informationTitle}>start</h5>
          <p className={styles.information}>{start_date}</p>
          <h5 className={styles.informationTitle}>koniec</h5>
          <p className={styles.information}>{end_date}</p>
          <h5 className={styles.informationTitle}>
            {strapiExhibit.place.name}
          </h5>
          <p className={styles.information}>{strapiExhibit.place.address}</p>
        </div>
      )}

      <img
        src={strapiExhibit.media[0].url}
        alt="wystawa"
        className={rightColumnStyles.image}
      />
      <h5
        className={styles.informationTitle}
        style={
          isMobile
            ? { marginBottom: '15px' }
            : { marginTop: '0px', marginBottom: '30px' }
        }
      >
        Więcej informacji
      </h5>
      {strapiExhibit.contacts.map((contact, key) => (
        <div style={{ display: 'flex', flexDirection: 'column' }} key={key}>
          <a href="www.asp.wroc.pl" className={styles.information}>
            {contact.contact}
          </a>
        </div>
      ))}
    </div>
  );
};

export default providers(RightColumn);
