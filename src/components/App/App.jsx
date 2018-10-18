/* eslint-disable */
import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import bs from '../../styles/bootstrap.module.css';
import styles from './App.module.sass';
import TasksManager from '../TasksManager/TasksManager';
import BasicHeader from './components/BasicHeader/BasicHeader';
import Modal from '../../modules/Modal/Modal';
import Weather from '../Weather/Weather';
import Timeline from '../Timeline/Timeline';
import Maps from '../Maps/Maps';
import { Route, Switch } from 'react-router-dom';


const App = () => (
  <div className={`${bs.container} ${styles.container}`}>
    <Route path="/(maps|tasks-list)/" component={BasicHeader} />
    {/*TODO: Add Home component and route*/}
    {/*TODO: Add TasksList component and route*/}
    <Route path="/overview" component={Weather} />
    <Route path="/overview" component={Timeline} />
    <Route path="/(overview|tasks-list)/" component={TasksManager} />
    <Route path="/maps" component={Maps} />
      {/* MODALS */}
    <Modal styles={styles} />
  </div>
);

const Overview = () => (
  <Fragment>
    <Weather />
    <Timeline />
    <TasksManager />
  </Fragment>
);

export default hot(module)(App); // eslint-disable-line
