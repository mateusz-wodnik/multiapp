import {
  SET_MARKERS,
  ADD_MARKER,
  REMOVE_MARKER,
  UPDATE_MARKER,
} from './actions';

export const initialState = [];

function list(state = initialState, action) {
  switch (action.type) {
    case SET_MARKERS:
      return action.markers;
    case ADD_MARKER:
      return [...state, action.marker];
    case REMOVE_MARKER:
      return state.filter(item => item !== action.marker); // eslint-disable-line
    case UPDATE_MARKER:
      const newState = [...state]; // eslint-disable-line
      newState[0].y = 17.038538;
      newState[0].x = 51.107883;
      return newState;
    default:
      return state;
  }
}

export default list;
