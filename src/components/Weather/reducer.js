import { combineReducers } from 'redux';
import WeatherReducer from '../../_utils/FetchReducerCreator';

export default combineReducers({
  actual: WeatherReducer('ACTUAL'),
  forecast: WeatherReducer('FORECAST'),
});
