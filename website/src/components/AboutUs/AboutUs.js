import Layout from '../shared/Layout';
import React from 'react';
import PhotoWithTitle from './PhotoWithTitle/PhotoWithTitle';
import * as styles from './AboutUs.module.scss';
import AboutUsInformation from './AboutUsInformation/AboutUsInformation';
import MotherVideo from '../../assets/videos/Mother.mp4';
import useIsTablet from '../../hooks/useIsTablet';
import providers from '../../utils/providers';

const AboutUs = () => {
  const isTablet = useIsTablet();
  return (
    <Layout darkTheme>
      <PhotoWithTitle title="O NAS" isAboutUs={true} />
      <AboutUsInformation />
      <div>
        <video
          preload="none"
          controls
          autoPlay
          muted
          loop
          className={styles.video}
        >
          <source src={MotherVideo} type="video/mp4" />
        </video>
      </div>
      <div style={{ marginBottom: '-200px' }}>
        <PhotoWithTitle title="HISTORIA" isAboutUs={false} />
        {isTablet ? (
          <div
            className={styles.history}
            style={{ width: '100%', top: '-180px' }}
          >
            <p className={styles.historyText} style={{ width: '30%' }}>
              W styczniu 1946 r., decyzją Ministra Kultury i Sztuki, do
              Wrocławia skierowany zostaje Eugeniusz Geppert z zadaniem
              założenia w zniszczonym działaniami wojennymi mieście Wyższej
              Szkoły Sztuk Pięknych.
            </p>
            <p className={styles.historyText} style={{ width: '100%' }}>
              Na jej siedzibę władze miasta wyznaczyły dwa budynki:
              przedwojennej Miejskiej Szkoły Rzemiosł i Przemysłu Artystycznego
              (mieszczącej się przy obecnej ul. Traugutta) oraz dawnej Akademii
              Sztuki i Przemysłu Artystycznego (pl. Polski).
            </p>
          </div>
        ) : (
          <div className={styles.history}>
            <p className={styles.historyText}>
              W styczniu 1946 r., decyzją Ministra Kultury i Sztuki, do
              Wrocławia skierowany zostaje Eugeniusz Geppert z zadaniem
              założenia w zniszczonym działaniami wojennymi mieście Wyższej
              Szkoły Sztuk Pięknych.
            </p>
            <p className={styles.historyText}>
              Na jej siedzibę władze miasta wyznaczyły dwa budynki:
              przedwojennej Miejskiej Szkoły Rzemiosł i Przemysłu Artystycznego
              (mieszczącej się przy obecnej ul. Traugutta) oraz dawnej Akademii
              Sztuki i Przemysłu Artystycznego (pl. Polski).
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default providers(AboutUs);
