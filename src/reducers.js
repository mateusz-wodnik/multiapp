import { combineReducers } from 'redux';
import taskManager from './components/TasksManager/reducer';
import weather from './components/Weather/reducer';
import map from './components/Map/reducer';

export default combineReducers({
  taskManager,
  weather,
  map,
});
