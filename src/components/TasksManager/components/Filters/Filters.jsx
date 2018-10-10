import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Filters.sass';

const Filters = ({ filters }) => (
  <section className={`${styles.container} ${bs['btn-group']}`}>
    {filters.map(filter => <button type="button" className={`${styles.item} ${bs['list-group-item']}`}>{filter}</button>)}
  </section>
);

Filters.defaultProps = {
  filters: ['important', 'fun', 'all'],
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
};

export default Filters;
