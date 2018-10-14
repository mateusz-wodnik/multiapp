import React from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import bs from '../../styles/bootstrap.module.css';
import styles from './App.module.sass';
import TasksManager from '../TasksManager/TasksManager';
import BasicHeader from './components/BasicHeader/BasicHeader';
import Modal from '../../modules/Modal/Modal';
import Weather from '../Weather/Weather';
import Timeline from '../Timeline/Timeline';


const App = () => (
  <div className={`${bs.container} ${styles.container}`}>
    <BasicHeader />
    <Weather />
    <Timeline />
    <TasksManager />
    {/* MODALS */}
    <Modal styles={styles} />
  </div>
);

export default hot(module)(App); // eslint-disable-line
