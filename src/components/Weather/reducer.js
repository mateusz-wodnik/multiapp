import { combineReducers } from 'redux';
import WeatherReducer from './ReducerCreator';

export default combineReducers({
  actual: WeatherReducer('ACTUAL'),
  forecast: WeatherReducer('FORECAST'),
});
