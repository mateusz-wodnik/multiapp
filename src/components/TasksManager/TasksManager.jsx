import React from 'react';
import PropTypes from 'prop-types';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TasksManager.sass';
import List from './components/List/List';
import Filters from './components/Filters/Filters';
import data from './tasks.data';


const TasksManager = ({ tasks, filters }) => (
  <article className={`${styles.container}`}>
    <Filters filters={filters} />
    <List tasks={tasks} />
  </article>
);

TasksManager.defaultProps = {
  tasks: data,
  // TODO Add actual redux based filters that is managed by filters component buttons
  filters: [].concat(...data.map(item => item.categories)),
};

TasksManager.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  filters: PropTypes.arrayOf(PropTypes.string),
};

export default TasksManager; // eslint-disable-line
