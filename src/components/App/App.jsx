import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.sass';
import TasksManager from '../TasksManager/TasksManager';
import BasicHeader from './components/BasicHeader/BasicHeader';
import Modal from '../../modules/Modal/Modal';


const App = () => (
  <div className={`${bs.container} ${styles.container}`}>
    <BasicHeader />
    <TasksManager />
    {/* MODALS */}
    <Modal styles={styles} />
  </div>
);

export default hot(module)(App); // eslint-disable-line
