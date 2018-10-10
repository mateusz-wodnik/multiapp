import {
  ADD_FILTER,
  REMOVE_FILTER, SET_FILTERS,
} from './actions';

export const initialState = [];

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.filter];

    case REMOVE_FILTER:
      return state.filter(filter => filter !== action.filter);

    case SET_FILTERS:
      return action.filters;

    default:
      return state;
  }
}

export default filtersReducer;
