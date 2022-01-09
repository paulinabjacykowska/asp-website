import * as React from 'react';
import * as styles from '../Description/Description.module.scss';

const Description = ({ strapiDegree }) => {
  return (
    <>
      <h3 className={styles.fieldOfStudy}>
        {strapiDegree.field_of_study.name}
      </h3>
      <div className={styles.mainContainer}>
        <div
          style={{
            flex: '75%',
          }}
        >
          {strapiDegree.promoters.map(promoter => (
            <div className={styles.informationContainer}>
              <div style={{ flex: '38%' }}>
                <p className={styles.informationTitle}>{promoter.title}</p>
                <p className={styles.information}>{promoter.subtitle}</p>
              </div>
              <div style={{ flex: '37%' }}>
                <p
                  className={styles.informationTitle}
                  style={{ fontWeight: 700 }}
                >
                  Promotor
                </p>
                <p
                  className={styles.information}
                  style={{ fontStyle: 'normal' }}
                >
                  {promoter.promoter_name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.contactContainer}>
          <div>
            <h4 className={styles.informationTitle}>Kontakt</h4>
            {strapiDegree.contacts.map(contact => (
              <p
                className={styles.information}
                style={{ fontStyle: 'normal', marginBottom: '10px' }}
              >
                {contact.contact}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{strapiDegree.description}</p>
      </div>
    </>
  );
};

export default Description;
