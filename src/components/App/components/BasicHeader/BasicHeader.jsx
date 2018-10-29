import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicHeader.module.sass';
import DateInfo from '../../../../modules/DateInfo/DateInfo';
import Clock from '../../../../modules/Clock/Clock';

const BasicHeader = ({ children }) => (
  <header className={styles.container}>
    <DateInfo styles={styles}>
      <Clock className={styles.clock} />
    </DateInfo>
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
