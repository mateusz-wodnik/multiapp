import stations from './stations.data';
import MPKWroclawAPI from '../../../../APIS/MPKWroclawAPI';

export const SET_STATIONS = 'SET_STATIONS';
export const LOADING_STATIONS = 'LOADING_STATIONS';
export const ERROR_STATIONS = 'ERROR_STATIONS';
export const ADD_STATIONS = 'ADD_STATIONS';
export const REMOVE_STATIONS = 'REMOVE_STATIONS';
export const UPDATE_STATIONS = 'UPDATE_STATIONS';

const API = new MPKWroclawAPI();

export const setMarkers = markers => ({
  type: SET_STATIONS,
  loading: false,
  markers,
});

export const loadingMarkers = () => ({
  type: LOADING_STATIONS,
  loading: true,
  error: null,
});

export const errorMarkers = error => ({
  type: ERROR_STATIONS,
  loading: false,
  error,
});

export const setMarkersRequest = () => (
  (dispatch) => {
    dispatch(loadingMarkers());
    API.getStations()
      .then(markers => dispatch(setMarkers(stations)))
      .catch(error => dispatch(setMarkers(stations)));
      // .catch(error => dispatch(errorMarkers(error.message))); // TODO: fix API to fetch local files
  }
);

export const addMarker = marker => ({
  type: ADD_STATIONS,
  marker,
});

export const removeMarker = marker => ({
  type: REMOVE_STATIONS,
  marker,
});

export const updateMarker = marker => ({
  type: UPDATE_STATIONS,
  marker,
});
