import React from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './TasksManager.sass';
import List from './components/List/List';
import Filters from './components/Filters/Filters';


const TasksManager = () => (
  <header className={`${styles.container}`}>
    <Filters />
    <List />
  </header>
);

export default TasksManager; // eslint-disable-line
