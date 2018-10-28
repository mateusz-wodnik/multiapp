import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Filters from '../TasksManager/components/Filters/Filters';
import List from '../TasksManager/components/List/List';
import Widget from '../Weather/components/Widget/Widget';
import Page from '../Weather/components/Page/Page';


const App = () => (
  <div className={styles.container}>
    <Route
      path="/(tasks-list|weather|maps)"
      render={() => (
        <BasicHeader>
          <Route path="/tasks-list" component={NewTaskForm} />
        </BasicHeader>
      )}
    />
    {/* TODO: Add Loading screen component and route */}
    <Route
      path="/(overview|weather)"
      render={() => (
        <Switch>
          <Route
            path="/overview"
            render={() => (
              <Weather>
                <Widget />
              </Weather>
            )}
          />
          <Route
            path="/weather"
            render={() => (
              <Weather setForecast>
                <Page />
              </Weather>
            )}
          />
        </Switch>
      )}
    />
    <Route path="/overview" component={Timeline} />
    <Route
      path="/(overview|tasks-list)"
      render={() => (
        <Switch>
          <Route
            path="/overview"
            render={() => (
              <TasksManager>
                <List />
              </TasksManager>
            )}
          />
          <Route
            path="/tasks-list"
            render={() => (
              <TasksManager allowEditing>
                <Filters>
                  <List />
                </Filters>
              </TasksManager>
            )}
          />
        </Switch>
      )}
    />
    <Route path="/maps" component={Maps} />
    <Navigation />
    {/* MODALS */}
    <Modal styles={styles} />
  </div>
);

export default hot(module)(App);
