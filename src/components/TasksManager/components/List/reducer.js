import {
  ADD_TASK,
  REMOVE_TASK,
  SET_LIST,
} from './actions';

export const initialState = [];

function list(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return action.list;
    case ADD_TASK:
      return [...state, action.task];
    case REMOVE_TASK:
      return state.filter(item => item._id !== action.task._id); // eslint-disable-line
    default:
      return state;
  }
}

export default list;
