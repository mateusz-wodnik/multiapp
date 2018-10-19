import React from 'react';
import PropTypes from 'prop-types';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './Task.module.sass';
import timeParser from '../../../../_utils/timeParser';


const Task = ({
  title, date, description, tags, categories, open, removeTask, _id,
}) => {
  const time = timeParser(new Date(date));
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <time className={`${styles.time} ${bs.badge} ${bs['badge-pill']} ${bs['badge-info']}`}>{`${time.hours}:${time.minutes}`}</time>
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
};

Task.defaultProps = {
  title: '',
  date: '',
  description: '',
  tags: [],
  categories: [],
  open: false,
  _id: '',
  removeTask: () => null,
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  _id: PropTypes.string,
  removeTask: PropTypes.func,
};

export default Task;
