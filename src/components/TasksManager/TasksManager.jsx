import React from 'react';
import PropTypes from 'prop-types';
import styles from './TasksManager.sass';
import List from './components/List/List';
import data from './tasks.data';


const TasksManager = ({ tasks }) => (
  <section className={styles.container}>
    <List tasks={tasks} />
  </section>
);

TasksManager.defaultProps = {
  tasks: data,
};

TasksManager.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TasksManager; // eslint-disable-line
