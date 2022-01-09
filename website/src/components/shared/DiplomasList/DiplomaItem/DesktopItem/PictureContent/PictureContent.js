import ExactImageContent from '../../shared/ExactImageContent';
import { IMAGES_BACKEND_URL } from '../../../../../../constants';
import TitleWrapper from '../../shared/TitleWrapper';
import * as React from 'react';
import {
  isDivisibleThree,
  isOdd,
  getRandomNumber,
} from '../../../../../../utils/helpers';
import DepartmentIcon, { iconsNames } from '../../../../DepartmentIcon';
import * as styles from '../DesktopItem.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { motion } from 'framer-motion';

const PictureContent = ({ diploma, index, displayFarfocle }) => {
  const [iconIndex] = useState(getRandomNumber(0, iconsNames.length - 1));
  return (
    <TitleWrapper.Root diploma={diploma}>
      <TitleWrapper.Content diploma={diploma} withTitle withAdditional>
        <ExactImageContent
          src={IMAGES_BACKEND_URL + diploma.degree_placeholder[0].picture.url}
          style={{ marginBottom: -7 }}
        />
        {isDivisibleThree(index) && displayFarfocle && (
          <motion.div
            className={classNames(styles.icon, isOdd(index) && styles.iconLeft)}
            style={{ position: 'absolute' }}
            animate={{ y: ['10%', '-10%', '10%'] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <DepartmentIcon
              name={iconsNames[iconIndex]}
              className={classNames(
                styles.icon,
                isOdd(index) && styles.iconLeft
              )}
            />
          </motion.div>
        )}
      </TitleWrapper.Content>
    </TitleWrapper.Root>
  );
};

export default PictureContent;
