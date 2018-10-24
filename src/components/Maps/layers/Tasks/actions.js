import stations from './stations.data';
import {setList, tasksStore} from '../../../TasksManager/components/List/actions'

export const SET_TASKS = 'SET_TASKS';
export const LOADING_TASKS = 'LOADING_TASKS';
export const ERROR_TASKS = 'ERROR_TASKS';

export const setMarkers = markers => ({
  type: SET_TASKS,
  loading: false,
  markers,
});

export const loadingMarkers = () => ({
  type: LOADING_TASKS,
  loading: true,
  error: null,
});

export const errorMarkers = error => ({
  type: ERROR_TASKS,
  loading: false,
  error,
});

export const setMarkersRequest = () => (
  (dispatch) => {
    dispatch(loadingMarkers());
    tasksStore.getAll('tasks')
      .then(list => {
        const features = list.map(task => task.place);
        const geoJSON = {
          type: 'FeatureCollection',
          features,
        };
        dispatch(setMarkers(geoJSON));
      })
      .catch(error => dispatch(errorMarkers(error.message)));
      // .catch(error => dispatch(errorMarkers(error.message))); // TODO: fix API to fetch local files
  }
);