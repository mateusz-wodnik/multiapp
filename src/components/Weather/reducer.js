import {
  SET_WEATHER,
} from './actions';

export const initialState = {};

function weather(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.weather;
    default:
      return state;
  }
}

export default weather;
