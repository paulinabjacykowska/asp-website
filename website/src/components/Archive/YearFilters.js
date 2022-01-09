import { Row } from '../shared/grid/grid';
import * as styles from './Archive.module.scss';
import FilterButton from '../shared/buttons/FilterButton/FilterButton';
import React, { useState } from 'react';
import { Subtitle } from '../shared/typography';

const INITIAL_YEARS_TO_SHOW = 3;

const YearFilters = ({ years, year: selectedYear, onChangeYear }) => {
  const [areYearsExpanded, setAreYearsExpanded] = useState(false);
  const yearsToDisplay = areYearsExpanded
    ? years
    : years.slice(0, INITIAL_YEARS_TO_SHOW);

  return (
    <>
      <Row className={styles.section}>
        <div className={styles.yearsContainer}>
          <FilterButton
            title="Wszystkie"
            isActive={!selectedYear}
            onClick={() => onChangeYear(null)}
          />
          {yearsToDisplay.map(year => (
            <FilterButton
              title={year}
              isActive={selectedYear === year}
              onClick={() => onChangeYear(year)}
              key={year.id}
            />
          ))}
        </div>
        {!areYearsExpanded && (
          <div>
            <FilterButton
              title="Rozwiń"
              onClick={() => setAreYearsExpanded(true)}
            />
          </div>
        )}
      </Row>
    </>
  );
};

export default YearFilters;
