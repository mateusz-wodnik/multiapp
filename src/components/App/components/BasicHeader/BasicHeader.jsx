import React from 'react';
import PropTypes from 'prop-types';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './BasicHeader.module.sass';
import DateInfo from '../../../../modules/DateInfo/DateInfo';

const BasicHeader = ({ children }) => (
  <header className={`${styles.container} ${bs.container}`}>
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
