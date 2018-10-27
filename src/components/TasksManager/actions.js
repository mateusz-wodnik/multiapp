/* eslint-disable */
import { set, del, Store } from 'idb-keyval';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import TaskModel from './components/Task/Task.model';

Store.prototype.getAll = function (collectionName) {
  return this._dbp
    .then(db => (
      new Promise((res, rej) => {
        const collection = db
          .transaction(collectionName)
          .objectStore(collectionName)
          .getAll();
        collection.onsuccess = () => res(collection.result);
        collection.onerror = () => rej(Error('Get list errored'));
      })
    ));
};

const actualDate = moment().format('DD-MM-YYYY');
export const tasksStore = new Store(actualDate, 'tasks');

export const SET_TASKS = 'SET_TASKS';
export const ADD_TASKS = 'ADD_TASKS';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const REMOVE_TASKS = 'REMOVE_TASKS';
export const LOADING_TASKS = 'LOADING_TASKS';
export const ERROR_TASKS = 'ERROR_TASKS';

export const setList = items => ({
  type: SET_TASKS,
  loading: false,
  items,
});

export const loadingTasks = () => ({
  type: LOADING_TASKS,
  loading: true,
  error: null,
});

export const errorTasks = error => ({
  type: ERROR_TASKS,
  loading: false,
  error,
});

export const setListRequest = () => (
  (dispatch) => {
    dispatch(loadingTasks());
    tasksStore.getAll('tasks')
      .then(list => dispatch(setList(list)))
      .catch(error => dispatch(errorTasks(error.message)));
  }
);

export const addTask = item => ({
  type: ADD_TASKS,
  loading: false,
  item,
});

export const addTaskRequest = task => (
  (dispatch) => {
    dispatch(loadingTasks());
    const _id = uuidv4();
    const newTask = TaskModel(_id, task);
    set(_id, newTask, tasksStore)
      .then(() => dispatch(addTask(newTask)))
      .catch(error => dispatch(errorTasks(error.message)));
  }
);

export const updateTask = task => ({
  type: UPDATE_TASKS,
  loading: false,
  task,
});

export const updateTaskRequest = (_id, task) => (
  (dispatch) => {
    dispatch(loadingTasks());
    const newTask = TaskModel(_id, task);
    set(_id, newTask, tasksStore)
      .then(() => dispatch(updateTask(newTask)))
      .catch(error => dispatch(errorTasks(error.message)));
  }
);

export const removeTask = _id => ({
  type: REMOVE_TASKS,
  _id,
});

export const removeTaskRequest = _id => (
  (dispatch) => {
    dispatch(loadingTasks());
    del(_id, tasksStore)
      .then(() => dispatch(removeTask(_id)))
      .catch(error => dispatch(errorTasks(error.message)));
  }
);
