/* eslint-disable */
import { set, del, Store } from 'idb-keyval';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import dateParser from '../../../../_utils/dateParser';
import TaskModel from './Task.model';

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
const tasksStore = new Store(actualDate, 'tasks');

export const SET_LIST = 'SET_LIST';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const setList = list => ({
  type: SET_LIST,
  list,
});

export const setListRequest = () => (
  (dispatch) => {
    tasksStore.getAll('tasks')
      .then(list => dispatch(setList(list)))
      .catch(console.error);
  }
);

export const addTask = task => ({
  type: ADD_TASK,
  task,
});

export const addTaskRequest = task => (
  (dispatch) => {
    const _id = uuidv4();
    const newTask = TaskModel(_id, task);
    set(_id, newTask, tasksStore)
      .then(() => dispatch(addTask(newTask)))
      .catch(console.error);
  }
);

export const removeTask = task => ({
  type: REMOVE_TASK,
  task,
});

export const removeTaskRequest = task => (
  (dispatch) => {
    del(task._id, tasksStore)
      .then(() => dispatch(removeTask(task)))
      .catch(console.error);
  }
);
