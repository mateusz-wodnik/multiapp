import {
  ADD_FILTER,
  REMOVE_FILTER,
  SET_FILTERS,
} from './actions';

export const initialState = [];

function filtersReducer(state = initialState, action) {
  const { type, filter, filters } = action;
  switch (type) {
    case ADD_FILTER:
      return [...state, filter];

    case REMOVE_FILTER:
      return state.filter(item => item !== filter);

    case SET_FILTERS:
      return filters;

    default:
      return state;
  }
}

export default filtersReducer;
