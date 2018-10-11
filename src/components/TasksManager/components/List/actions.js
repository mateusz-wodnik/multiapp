import data from '../../tasks.data';

export const SET_LIST = 'SET_LIST';
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const setList = list => ({
  type: SET_LIST,
  list,
});

export const setListRequest = () => (
  (dispatch) => {
    const list = data;
    dispatch(setList(list));
  }
);

export const addTask = task => ({
  type: ADD_TASK,
  task,
});

export const addTaskRequest = task => (
  (dispatch) => {
    dispatch(addTask(task));
  }
);

export const removeTask = task => ({
  type: REMOVE_TASK,
  task,
});

export const removeTaskRequest = task => (
  (dispatch) => {
    dispatch(removeTask(task));
  }
);
