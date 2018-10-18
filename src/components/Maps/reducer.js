import { combineReducers } from 'redux';
import MarkerReducer from './ReducerCreator';
import search from './components/SearchBox/reducer';

export default combineReducers({
  mpk: MarkerReducer('MPK'),
  stations: MarkerReducer('STATIONS'),
  searchedPlace: search,
});
