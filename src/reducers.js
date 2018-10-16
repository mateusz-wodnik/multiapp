import { combineReducers } from 'redux';
import taskManager from './components/TasksManager/reducer';
import weather from './components/Weather/reducer';
import maps from './components/Maps/reducer';

export default combineReducers({
  taskManager,
  weather,
  maps,
});
