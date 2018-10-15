import {
  ADD_MARKER,
  REMOVE_MARKER,
} from './actions';

export const initialState = [];

function list(state = initialState, action) {
  switch (action.type) {
    case ADD_MARKER:
      return [...state, action.marker];
    case REMOVE_MARKER:
      return state.filter(item => item !== action.marker); // eslint-disable-line
    default:
      return state;
  }
}

export default list;
