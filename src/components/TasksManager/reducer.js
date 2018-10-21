import { combineReducers } from 'redux';
import filters from './components/Filters/reducer';
import list from './components/List/reducer';

const defaultCategories = [
  'categories',
  'important',
  'fun',
  'work',
  'family',
  'meeting',
  'eating',
  'shopping',
];

export const initialState = [
  ...defaultCategories,
];

function categories(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  filters,
  list,
  categories,
});
