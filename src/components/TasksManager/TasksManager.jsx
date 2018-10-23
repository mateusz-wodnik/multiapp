import React from 'react';
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

export default TasksManager; // eslint-disable-line
