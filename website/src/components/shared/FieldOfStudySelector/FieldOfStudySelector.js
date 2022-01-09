import * as styles from './FieldOfStudySelector.module.scss';
import CircleIconButton from '../buttons/CircleIconButton/CircleIconButton';
import FilterIcon from '../../../assets/svg/filter.svg';
import FilterButton from '../buttons/FilterButton/FilterButton';
import * as React from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import { useState } from 'react';

const FieldOfStudySelector = ({
  fieldsOfStudy,
  selectedFieldOfStudy,
  onFieldOfStudyChange,
}) => {
  const isMobile = useIsMobile();
  const [showButtons, setShowButtons] = useState(false);

  const renderedFields = (
    <>
      <FilterButton
        title="Wszystkie"
        isActive={!selectedFieldOfStudy}
        onClick={() => onFieldOfStudyChange(null)}
      />
      {fieldsOfStudy.map(fieldOfStudy => (
        <FilterButton
          key={fieldOfStudy.id}
          title={fieldOfStudy.name}
          isActive={fieldOfStudy === selectedFieldOfStudy}
          onClick={() => onFieldOfStudyChange(fieldOfStudy)}
        />
      ))}
    </>
  );

  return (
    <>
      {isMobile ? (
        <div className={styles.margin}>
          <div className={styles.iconFilter}>
            <CircleIconButton
              icon={FilterIcon}
              onClick={() => setShowButtons(!showButtons)}
            />
          </div>
          {showButtons && (
            <div className={styles.filterButtonsContainer}>
              {renderedFields}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.filterButtonsContainer}>{renderedFields}</div>
      )}
    </>
  );
};

export default FieldOfStudySelector;
