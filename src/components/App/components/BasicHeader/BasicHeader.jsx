import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicHeader.module.sass';
import DateInfo from '../../../../modules/DateInfo/DateInfo';

const BasicHeader = ({ children }) => (
  <header className={styles.container}>
    <DateInfo styles={styles} />
    {children}
  </header>
);

BasicHeader.defaultProps = {
  children: null,
};

BasicHeader.propTypes = {
  children: PropTypes.node,
};

export default BasicHeader;
