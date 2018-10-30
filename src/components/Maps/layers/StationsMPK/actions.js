// import stations from '../../../../../public/stations.data';
import MPKWroclawAPI from '../../../../APIS/MPKWroclawAPI';

export const SET_STATIONS = 'SET_STATIONS';
export const LOADING_STATIONS = 'LOADING_STATIONS';
export const ERROR_STATIONS = 'ERROR_STATIONS';

const API = new MPKWroclawAPI();

export const setMarkers = result => ({
  type: SET_STATIONS,
  loading: false,
  result,
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
      .then(stations => dispatch(setMarkers(stations)))
      .catch(error => dispatch(errorMarkers(error.message)));
      // .catch(error => dispatch(errorMarkers(error.message))); // TODO: fix API to fetch local files
  }
);