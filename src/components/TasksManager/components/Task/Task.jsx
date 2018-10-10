import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.sass';

const Task = ({
  title, date, description, tags, categories, open,
}) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h4 className={styles.title}>{title}</h4>
      {/* TODO replace slice with proper data normalizing utility */}
      <time>{date.slice(0, 10)}</time>
    </header>
    {/* Todo: content should be visible only on specific task page */}
    {open && (
      <div className={styles.content}>
        <p>{description}</p>
        <h5>Tags:</h5>
        <ul className={styles.tags}>
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
        <h5>Categories:</h5>
        <ul className={styles.categories}>
          {categories.map(category => <li>{category}</li>)}
        </ul>
      </div>)}
  </div>
);

Task.defaultProps = {
  title: '',
  date: '',
  description: '',
  tags: [],
  categories: [],
  open: false,
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
};

export default Task;
