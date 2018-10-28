import React, { Component, Fragment, cloneElement } from 'react';
import PropTypes from 'prop-types';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './Filters.module.sass';

class Filters extends Component {
  state = {
    items: this.props.items,
    filters: [],
    filterTypes: [],
  };

  componentDidMount() {
    const { items } = this.props;
    const filterTypes = this.filterTypes(items);
    this.setFilterTypes(filterTypes);
  }

  componentDidUpdate(prevProps, prevState) {
    const { items, callback } = this.props;
    const { filters } = this.state;
    if (prevProps.items !== items) {
      const filterTypes = this.filterTypes(items);
      this.setFilterTypes(filterTypes);
      const filtered = this.handleFilters(items, filters);
      this.setItems(filtered);
    }
    if (prevState.filters !== filters) {
      const filtered = this.handleFilters(items, filters);
      this.setItems(filtered);
    }
    if (prevState !== this.state) {
      callback(this.state);
    }
  }

  handleButtons = (e, filter) => {
    const { addFilters, removeFilter, setFilters } = this;
    const { filterTypes } = this.state;
    const value = e.target.getAttribute('aria-checked');
    if (value === 'true') {
      e.target.setAttribute('aria-checked', false);
      // False filter const refers to 'all' button
      filter ? removeFilter(filter) : setFilters([]); // eslint-disable-line
    } else {
      e.target.setAttribute('aria-checked', true);
      // False filter const refers to 'all' button
      filter ? addFilters([filter]) : setFilters(filterTypes); // eslint-disable-line
    }
  };

  removeFilter = toRemove => this.setState(state => (
    { filters: state.filters.filter(filter => filter !== toRemove) }
  ));

  setFilters = filters => this.setState({ filters });

  addFilters = filters => this.setState(state => ({ filters: [...state.filters, ...filters] }));

  setFilterTypes = filterTypes => this.setState({ filterTypes });

  filterTypes = (list) => {
    const types = {};
    list.forEach((item) => {
      item.categories.forEach((category) => {
        types[category] = true;
      });
    });
    return Object.keys(types);
  };

  handleFilters = (list, filters) => (
    filters.length
      ? list.filter(item => filters.some(filter => item.categories.includes(filter)))
      : list
  );

  setItems = items => this.setState({ items });

  render() {
    const { children, items: doNotPass, ...props } = this.props;
    const { items, filters, filterTypes } = this.state;
    return (
      <Fragment>
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
        {cloneElement(children, { items, ...props })}
      </Fragment>
    );
  }
}

Filters.defaultProps = {
  items: [],
  addFilter: () => null,
  removeFilter: () => null,
  setFilters: () => null,
  callback: () => null,
  children: null,
};

Filters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  addFilter: PropTypes.func,
  removeFilter: PropTypes.func,
  setFilters: PropTypes.func,
  callback: PropTypes.func,
  children: PropTypes.node,
};

export default Filters;
