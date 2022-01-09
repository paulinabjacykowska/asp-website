import * as React from 'react';
import * as styles from './TwoColumnsText.module.scss';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

const TwoColumnsText = ({ description, classname }) => {
  return (
    <div className={classNames(styles.descriptionContainer, classname)}>
      <ReactMarkdown className={styles.description}>
        {description}
      </ReactMarkdown>
    </div>
  );
};

export default TwoColumnsText;
