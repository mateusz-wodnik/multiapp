import React from 'react';
import PropTypes from 'prop-types';
import styles from './TasksManager.module.sass';
import List from './components/List/List';
import Filters from './components/Filters/Filters';
import bs from '../../styles/bootstrap.module.css';

const TasksManager = ({ allowEditing }) => (
  <article id="taskManager" className={`${styles.container} ${bs.container}`}>
    <Filters />
    <List allowEditing={allowEditing} />
  </article>
);

TasksManager.defaultProps = {
  allowEditing: false,
};

TasksManager.propTypes = {
  allowEditing: PropTypes.bool,
};

export default TasksManager; // eslint-disable-line
