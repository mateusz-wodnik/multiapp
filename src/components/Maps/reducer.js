import { combineReducers } from 'redux';
import FetchReducerCreator from '../../_utils/FetchReducerCreator';

export default combineReducers({
  mpk: FetchReducerCreator('MPK'),
  stations: FetchReducerCreator('STATIONS'),
  tasks: FetchReducerCreator('TASKS'),
});
