import { combineReducers } from 'redux';
import FetchReducerCreator from '../../_utils/FetchReducerCreator';

const defaultCategories = [
  'important',
  'fun',
  'work',
  'family',
  'meeting',
  'eating',
  'shopping',
];

function categories(state = defaultCategories, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  tasks: FetchReducerCreator('TASKS'),
  categories: () => defaultCategories,
});
