import {
  SET_LIST,
} from './actions';

export const initialState = [];

function list(state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return action.list;
    default:
      return state;
  }
}

export default list;
