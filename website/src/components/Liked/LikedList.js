import Seo from '../shared/Seo';
import Layout from '../shared/Layout';
import * as React from 'react';
import * as styles from './LikedList.module.scss';
import IconButton from '../shared/buttons/CircleIconButton/CircleIconButton.js';
import ArrowUp from '../../assets/svg/arrow-up.svg';
import { Link } from 'gatsby';
import { useAsync } from 'react-async-hook';
import { getLikedDegrees } from '../../getLikedDegrees';
import DegreeTileOnePhoto from './shared/DegreeTileOnePhoto/DegreeTileOnePhoto';
import EmptyLiked from './EmptyLiked/EmptyLiked';
import DegreeMobile from './shared/DegreeMobile/DegreeMobile';
import useIsMobile from '../../hooks/useIsMobile';
import providers from '../../utils/providers';
import { isOdd } from '../../utils/helpers';
import useLikedDiploma from '../../hooks/useLikedDiploma';
import StateInfo from '../shared/StateInfo';
import { STATES } from '../shared/StateInfo/StateInfo';
import { Grid } from '../shared/grid/grid';

const LikedList = () => {
  const isMobile = useIsMobile();
  const { likedDiplomas } = useLikedDiploma();

  const asyncDiplomas = useAsync(getLikedDegrees, [likedDiplomas]);

  return (
    <Layout className={styles.grid}>
      <Grid>
        <Seo title="Liked" />
        <h2 className={styles.title}>POLUBIONE DYPLOMY</h2>
        {asyncDiplomas.loading && <StateInfo state={STATES.loading} />}
        {asyncDiplomas.error && <StateInfo state={STATES.empty} />}
        {asyncDiplomas.result && asyncDiplomas.result.length === 0 && (
          <EmptyLiked />
        )}
        {asyncDiplomas.result &&
          asyncDiplomas.result.map(diploma =>
            isMobile ? (
              <DegreeMobile diploma_id={diploma} />
            ) : (
              <DegreeTileOnePhoto
                isRightPhoto={isOdd(asyncDiplomas.result.indexOf(diploma))}
                diploma_id={diploma}
              />
            )
          )}
        <div className={styles.buttonContainer}>
          <Link to="/liked">
            <IconButton icon={ArrowUp} />
          </Link>
        </div>
      </Grid>
    </Layout>
  );
};

export default providers(LikedList);
