import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './Filters.module.sass';
import * as actions from './actions';

class Filters extends Component {
  handleButtons = (e, filter) => {
    const {
      addFilter, removeFilter, setFilters, filterTypes,
    } = this.props;
    const { target } = e;
    const value = target.getAttribute('aria-checked');
    if (value === 'true') {
      target.setAttribute('aria-checked', false);
      // False filter const refers to 'all' button
      filter ? removeFilter(filter) : setFilters([]); // eslint-disable-line
    } else {
      target.setAttribute('aria-checked', true);
      // False filter const refers to 'all' button
      filter ? addFilter(filter) : setFilters(filterTypes); // eslint-disable-line
    }
  };

  render() {
    const { filters, filterTypes } = this.props;
    return (
      <section className={`${styles.container} ${bs['btn-group']}`}>
        <button
          className={`${bs.btn} ${styles.filter} ${filters.length === 0 ? styles.active : ''}`}
          type="button"
          role="checkbox"
          aria-checked={filters.length === filterTypes.length}
          onClick={this.handleButtons}
        >
          all
        </button>
        {filterTypes.map(filter => (
          <button
            key={filter}
            className={`${bs.btn} ${styles.filter} ${filters.includes(filter) ? styles.active : ''}`}
            type="button"
            role="checkbox"
            aria-checked={filters.includes(filter)}
            onClick={e => this.handleButtons(e, filter)}
          >
            <span>{filter}</span>
          </button>
        ))}
      </section>
    );
  }
}

Filters.defaultProps = {
  filters: [],
  filterTypes: [],
  addFilter: () => null,
  removeFilter: () => null,
  setFilters: () => null,
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  filterTypes: PropTypes.arrayOf(PropTypes.string),
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
  setFilters: PropTypes.func,
};

// TODO: Check efficiency of each filterTypes method
const filterTypes = (list) => {
  const types = {};
  list.forEach((item) => {
    item.categories.forEach((category) => {
      types[category] = true;
    });
  });
  return Object.keys(types);
};

const mapStateToProps = state => ({
  filters: state.taskManager.filters,
  filterTypes: filterTypes(state.taskManager.list),
  // Spread the Set object that is created from concatenated array of tasks categories arrays.
  // filterTypes: [...new Set([].concat(...state.taskManager.list.map(item => item.categories)))],
});

export default connect(mapStateToProps, { ...actions })(Filters);
