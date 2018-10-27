import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from '../Task.module.sass';
import bs from '../../../../../styles/bootstrap.module.css';

const Header = class Header extends Component {
  constructor(props) {
    super(props);
    this.header = createRef();
  }

  render() {
    const {
      timeRef,
      categoriesRef,
      titleRef,
      title,
      date,
      categories,
      allCategories,
      editable,
      _id,
      handleOpen,
      place,
    } = this.props;
    const {
      geometry: { coordinates } = [],
      properties: { name } = {},
    } = place;
    return (
      <header ref={this.header} className={`${styles.header} ${bs['card-header']}`} onClick={handleOpen}>
        <h4 ref={titleRef} className={`${styles.title} ${editable ? styles.editable : ''}`} contentEditable={editable}>{title}</h4>
        <time
          className={`${styles.time} ${bs.badge} ${bs['badge-pill']} ${bs['badge-info']} ${editable ? styles.editable : ''}`}
        >
          {moment(date).format('HH:mm')}
          {editable && (
          <input
            ref={timeRef}
            type="time"
            name="time"
            className={`${styles.timeEdit} ${bs['badge-pill']} ${bs['badge-info']}`}
            defaultValue={moment(date).format('HH:mm')}
          />
          )}
        </time>
        <ul id={`${_id}categories`} ref={categoriesRef} className={styles.categories}>
          {editable ? (
            allCategories.map(category => (
              <li key={`${_id}-${category}`} className={`${bs.badge} ${bs['badge-info']} ${styles.category}`}>
                {category}
                <input type="checkbox" defaultChecked={categories.includes(category)} name="category" className={styles.checkbox} />
              </li>
            ))
          ) : (
            categories.map(category => (
              <li key={`${_id}-${category}`} className={`${bs.badge} ${bs['badge-info']} ${styles.category}`}>
                {category}
              </li>
            ))
          )}
        </ul>
        {place && (
          <Link to={`/maps?coords=${coordinates.toString()}&name=${name}`} className={styles.place}>
            ◎
            {place.properties.name}
          </Link>
        )}
      </header>
    );
  }
};

Header.defaultProps = {
  _id: '',
  handleOpen: () => null,
  place: {},
  title: '',
  date: moment(),
  categories: [],
  allCategories: [],
  editable: false,
};

Header.propTypes = {
  _id: PropTypes.string,
  handleOpen: PropTypes.func,
  place: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  date: PropTypes.objectOf(PropTypes.any),
  categories: PropTypes.arrayOf(PropTypes.string),
  allCategories: PropTypes.arrayOf(PropTypes.string),
  editable: PropTypes.bool,
};

export default Header;
