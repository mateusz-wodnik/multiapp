import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Filters.sass';
import * as actions from './actions';

class Filters extends Component {
  // componentDidUpdate(prevProps) {
  //   const { setFilters, filterTypes } = this.props;
  //   console.log(prevProps.filterTypes, filterTypes);
  //   if (prevProps.filterTypes.length === 0) {
  //     setFilters(filterTypes);
  //   }
  // }

  handleButtons = (e, filter) => {
    const {
      addFilter, removeFilter, setFilters, filterTypes,
    } = this.props;
    const self = e.target;
    const value = self.getAttribute('aria-checked');
    self.classList.toggle(styles.active);
    if (value === 'true') {
      self.setAttribute('aria-checked', false);
      filter ? removeFilter(filter) : setFilters([]); // eslint-disable-line
    } else {
      self.setAttribute('aria-checked', true);
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
            {filter}
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

const mapStateToProps = state => ({
  filters: state.taskManager.filters,
  filterTypes: [...new Set([].concat(...state.taskManager.list.map(item => item.categories)))],
});

export default connect(mapStateToProps, { ...actions })(Filters);
