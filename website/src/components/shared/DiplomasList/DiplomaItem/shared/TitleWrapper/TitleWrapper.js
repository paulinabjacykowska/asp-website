import * as styles from './TitleWrapper.module.scss';
import React from 'react';
import classNames from 'classnames';
import DiplomaLink from '../DiplomaLink';

const Root = ({ diploma, children, className, style }) => {
  return (
    <DiplomaLink
      diploma={diploma}
      className={classNames(styles.containerRoot, className)}
      style={style}
    >
      {children}
    </DiplomaLink>
  );
};

const Content = ({
  diploma,
  children,
  className,
  style,
  withTitle,
  withAdditional,
}) => {
  return (
    <div
      className={classNames(
        styles.contentRoot,
        withTitle && styles.titleRoot,
        className
      )}
      style={style}
    >
      {children}

      <div className={styles.blackLayer} />
      {withTitle && (
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{diploma.title}</h3>
          <div className={styles.year}>{diploma.author}</div>
        </div>
      )}

      {withAdditional && (
        <span className={styles.additionalInfo}>
          {diploma.field_of_study?.name}{' '}
          {diploma.field_of_study?.name && diploma.year && '/'} {diploma.year}
        </span>
      )}
    </div>
  );
};

const TitleWrapper = {
  Root,
  Content,
};

export default TitleWrapper;
