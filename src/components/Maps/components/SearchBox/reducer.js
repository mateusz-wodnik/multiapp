import {
  SET_PLACE,
  REMOVE_PLACE,
} from './actions';

export const initialState = {};

function taskPlace(state = initialState, action) {
  const { type, place } = action;
  switch (type) {
    case SET_PLACE:
    case REMOVE_PLACE:
      return place;
    default:
      return state;
  }
}

export default taskPlace;
