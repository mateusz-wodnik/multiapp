import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from '../Task.module.sass';
import bs from '../../../../../styles/bootstrap.module.css';
import { Link } from 'react-router-dom';

const Header = class Header extends Component {
  constructor(props) {
    super(props);
    this.header = createRef();
  }

  render() {
    const {
      title,
      titleRef,
      date,
      timeRef,
      categories,
      categoriesRef,
      allCategories,
      editable,
      _id,
      handleOpen,
      place,
    } = this.props;
    const {
      geometry: { coordinates },
      properties: { name },
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
        <ul id={_id + 'categories'} ref={categoriesRef} className={styles.categories}>
          {allCategories.map((category) => {
            const isActive = categories.includes(category);
            if (!editable && !isActive) return null;
            return (
              <li key={category} className={`${bs.badge} ${bs['badge-info']} ${styles.category}`}>
                {category}
                {editable
                && <input type="checkbox" defaultChecked={isActive} name="category" className={styles.checkbox} />}
              </li>
            );
          })}
        </ul>
        {place && (
          <Link to={`/maps?coords=${coordinates.reverse().toString()}&name=${name}`} className={styles.place}>
            ◎
            {place.properties.name}
          </Link>
        )}
      </header>
    );
  }
};

Header.defaultProps = {
  title: '',
  date: moment(),
  categories: [],
  allCategories: [],
  editable: false,
  handleEditable: () => null,
};

Header.propTypes = {
  title: PropTypes.string,
  date: PropTypes.objectOf(PropTypes.any),
  categories: PropTypes.arrayOf(PropTypes.string),
  allCategories: PropTypes.arrayOf(PropTypes.string),
  editable: PropTypes.bool,
  handleEditable: PropTypes.func,
};

export default Header;
