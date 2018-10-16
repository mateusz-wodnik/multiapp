import { combineReducers } from 'redux';
import MarkerReducer from './ReducerCreator';

export default combineReducers({
  mpk: MarkerReducer('MPK'),
});
