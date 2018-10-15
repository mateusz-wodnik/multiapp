import { combineReducers } from 'redux';
import markers from './components/Marker/reducer';
import { SET_MAP } from './actions';

export const initialState = {};

function map(state = initialState, action) {
  switch (action.type) {
    case SET_MAP:
      return action.map;
    default:
      return state;
  }
}

export default combineReducers({
  map,
  markers,
});
