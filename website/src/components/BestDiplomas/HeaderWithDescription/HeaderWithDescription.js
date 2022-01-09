import * as React from 'react';
import TwoColumnsText from '../../shared/TwoColumnsText/TwoColumnsText';
import { Subtitle, Title } from '../../shared/typography';

const HeaderWithDescription = ({ data }) => {
  return (
    <>
      <Subtitle>Archiwum wystaw</Subtitle>
      <Title>Najlepsze Dyplomy ASP we Wrocławiu</Title>
      <TwoColumnsText description={data} />
    </>
  );
};

export default HeaderWithDescription;
