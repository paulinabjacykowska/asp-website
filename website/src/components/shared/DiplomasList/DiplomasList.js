import { Grid, Row } from '../grid/grid';
import DiplomaItem from './DiplomaItem';
import { chunk } from 'lodash';
import * as React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import * as styles from './DiplomaList.module.scss';
import StateInfo from '../StateInfo';
import { STATES } from '../StateInfo/StateInfo';

const DIPLOMAS_CHUNK_SIZE = 6;

const DiplomasList = ({
  asyncDegrees,
  desktopDivider,
  elementColor,
  backgroundColor,
  displayFarfocle,
}) => {
  const isMobile = useIsMobile();

  if (asyncDegrees.loading) {
    return (
      <StateInfo
        state={STATES.loading}
        elementColor={elementColor}
        backgroundColor={backgroundColor}
      />
    );
  }
  if (asyncDegrees.error) {
    return (
      <StateInfo
        state={STATES.error}
        elementColor={elementColor}
        backgroundColor={backgroundColor}
      />
    );
  }
  if (!asyncDegrees.result?.length) {
    return (
      <StateInfo
        state={STATES.empty}
        elementColor={elementColor}
        backgroundColor={backgroundColor}
      />
    );
  }

  return (
    <Grid fluid>
      <Row className={!isMobile && styles.desktopRow}>
        {renderDegreesWithBanner(
          asyncDegrees.result,
          !isMobile && desktopDivider,
          displayFarfocle
        )}
      </Row>
    </Grid>
  );
};

const renderDegreesWithBanner = (
  degrees = [],
  desktopDivider,
  displayFarfocle
) => {
  const renderedDegrees = degrees.map((degree, index) => (
    <DiplomaItem
      key={degree.id}
      diploma={degree}
      index={index}
      displayFarfocle={displayFarfocle}
    />
  ));
  if (!desktopDivider) return renderedDegrees;

  return chunk(renderedDegrees, DIPLOMAS_CHUNK_SIZE).flatMap(
    (diplomasChunk, index) =>
      index ? [desktopDivider, ...diplomasChunk] : diplomasChunk
  );
};

export default DiplomasList;
