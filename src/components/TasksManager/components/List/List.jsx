import React from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './List.sass';
import Task from '../Task/Task';

const List = ({ tasks }) => (
  <ul className={`${styles.container} ${bs['list-group']}`}>
    {tasks.map(task => <li className={`${styles.item} ${bs['list-group-item']}`}><Task {...task} /></li>)}
  </ul>
);

List.defaultProps = {
  tasks: [],
};

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default List;
