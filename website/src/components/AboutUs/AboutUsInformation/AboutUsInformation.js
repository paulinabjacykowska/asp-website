import React from 'react';
import * as styles from './AboutUsInformation.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import useIsTablet from '../../../hooks/useIsTablet';
import useIsMobile from '../../../hooks/useIsMobile';

const AboutUsInformation = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div>
      <div className={styles.descriptionContainer}>
        {isMobile ? (
          <div></div>
        ) : (
          <div className={styles.imageContainer}>
            <StaticImage
              src="../../../assets/images/aboutUsPhoto.png"
              alt="aboutUs"
              className={styles.informationImage}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <h4 className={styles.descriptionTitle}>
            Akademia Sztuk Pięknych im. Eugeniusza Gepperta we Wrocławiu
          </h4>
          <p className={styles.descriptionText}>
            jest uczelnią państwową, posiadającą pięć wydziałów, kształcących
            studentów na studiach stacjonarnych w jedenastu kierunkach oraz na
            pięciu kierunkach w formie niestacjonarnej.
          </p>
          <p className={styles.descriptionText}>
            Uczelnia w swojej ofercie edukacyjnej posiada również Szkołę
            Doktorską w dziedzinie sztuki, w dyscyplinie sztuki plastyczne i
            konserwacja dzieł sztuki prowadzoną w formie stacjonarnej z
            wykładowym językiem angielskim.
          </p>
          <p className={styles.descriptionText}>
            Akademia umożliwia rozwinięcie zainteresowania obszarem sztuki
            dzięki bogatej ofercie kierunków studiów podyplomowych oraz kursów
            dokształcających z zakresu rysunku, malarstwa i rzeźby.
          </p>
        </div>
      </div>
      {isTablet ? (
        <div className={styles.descriptionContainer}>
          <div
            className={styles.imageContainer}
            style={{ float: 'right', marginRight: '0px', marginLeft: '25px' }}
          >
            <StaticImage
              src="../../../assets/images/aboutUsGallery1.png"
              alt="aboutUs"
              className={styles.informationImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.descriptionText}>
              <strong>
                Naszym głównym zajęciem jest badanie kultury i sztuki wizualnej.
              </strong>{' '}
              Jesteśmy specjalistami w swoich dziedzinach posiadającymi
              kompetencje, wiedzę i doświadczenie umożliwiające pracę
              dydaktyczną, badawczą oraz komercyjną na najwyższym poziomie.
              Jednocześnie stale doskonalimy swe umiejętności we wszelkich
              możliwych płaszczyznach naszej działalności akademickiej.
            </p>
            <p className={styles.descriptionText}>
              Jesteśmy wyjątkową społecznością, która wspólnie stara się
              pobudzać, to co szczególne u osób, które nauczamy i z którymi
              współtworzymy. Zadajemy pytania i uczymy poszukiwać odpowiedzi –
              nie trzymamy się utartych schematów, cały czas usprawniamy
              procesy, których jesteśmy częścią. Niezmiennie dążymy do bycia
              centrum porozumienia pomiędzy kulturą, nauką i sztuką.
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.descriptionContainer}>
          <div className={styles.textContainer}>
            <p className={styles.descriptionText}>
              <strong>
                Naszym głównym zajęciem jest badanie kultury i sztuki wizualnej.
              </strong>{' '}
              Jesteśmy specjalistami w swoich dziedzinach posiadającymi
              kompetencje, wiedzę i doświadczenie umożliwiające pracę
              dydaktyczną, badawczą oraz komercyjną na najwyższym poziomie.
              Jednocześnie stale doskonalimy swe umiejętności we wszelkich
              możliwych płaszczyznach naszej działalności akademickiej.
            </p>
            <p className={styles.descriptionText}>
              Jesteśmy wyjątkową społecznością, która wspólnie stara się
              pobudzać, to co szczególne u osób, które nauczamy i z którymi
              współtworzymy. Zadajemy pytania i uczymy poszukiwać odpowiedzi –
              nie trzymamy się utartych schematów, cały czas usprawniamy
              procesy, których jesteśmy częścią. Niezmiennie dążymy do bycia
              centrum porozumienia pomiędzy kulturą, nauką i sztuką.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <StaticImage
              src="../../../assets/images/aboutUsGallery1.png"
              alt="aboutUs"
              className={styles.informationImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsInformation;
