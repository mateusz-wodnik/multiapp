import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.sass';
import Switch from '../../../../modules/Switch/Switch';

const Filters = ({ handleSwitch }) => (
  <ul className={styles.container}>
    <li className={styles.filter}>
      <span className={styles.name}>stations</span>
      <Switch onClick={() => handleSwitch('stations')} />
    </li>
    <li className={styles.filter}>
      <span className={styles.name}>live</span>
      <Switch onClick={() => handleSwitch('live')} />
    </li>
    <li className={styles.filter}>
      <span className={styles.name}>tasks</span>
      <Switch onClick={() => handleSwitch('tasks')} />
    </li>
  </ul>
);

Filters.defaultProps = {
  handleSwitch: () => null,
};

Filters.propTypes = {
  handleSwitch: PropTypes.func,
};

export default Filters;
