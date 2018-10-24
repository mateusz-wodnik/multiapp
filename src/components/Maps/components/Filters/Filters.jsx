import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filters.module.sass';
import Switch from '../../../../modules/Switch/Switch';

const Filters = ({ handleSwitch }) => (
  <div className={styles.container}>
    <div className={styles.filter}>
      stations:
      <Switch onClick={() => handleSwitch('stations')} />
    </div>
    <div className={styles.filter}>
      live:
      <Switch onClick={() => handleSwitch('live')} />
    </div>
    <div className={styles.filter}>
      tasks:
      <Switch onClick={() => handleSwitch('tasks')} />
    </div>
  </div>
);

Filters.defaultProps = {
  handleSwitch: () => null,
};

Filters.propTypes = {
  handleSwitch: PropTypes.func,
};

export default Filters;
