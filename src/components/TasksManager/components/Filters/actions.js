export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const SET_FILTERS = 'SET_FILTERS';

export const addFilter = filter => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  filter,
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  filters,
});
