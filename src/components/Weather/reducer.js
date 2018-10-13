import { combineReducers } from 'redux';
import filters from './components/Filters/reducer';
import list from './components/List/reducer';

export default combineReducers({
  filters,
  list,
});
