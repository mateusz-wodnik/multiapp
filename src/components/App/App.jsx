import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import styles from './App.module.sass';
import TasksManager from '../TasksManager/TasksManager';
import BasicHeader from './components/BasicHeader/BasicHeader';
import Modal from '../../modules/Modal/Modal';
import Weather from '../Weather/Weather';
import Timeline from '../Timeline/Timeline';
import Maps from '../Maps/Maps';
import Navigation from '../Navigation/Navigation';
import NewTaskForm from '../TasksManager/components/NewTaskForm/NewTaskForm';


const App = () => (
  <div className={`${styles.container}`}>
    <Route
      path="/tasks-list"
      render={() => (
        <BasicHeader>
          <NewTaskForm />
        </BasicHeader>
      )}
    />
    {/* TODO: Add Loading screen component and route */}
    <Route path="/overview" component={Weather} />
    <Route path="/overview" component={Timeline} />
    <Route path="/tasks-list" render={() => <TasksManager allowEditing />} />
    <Route path="/overview" component={TasksManager} />
    <Route path="/maps" component={Maps} />
    <Navigation />
    {/* MODALS */}
    <Modal styles={styles} />
  </div>
);

export default hot(module)(App);
