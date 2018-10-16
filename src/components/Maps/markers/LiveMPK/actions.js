import live from './live.data';
import MPKWroclawAPI from '../../../../APIS/MPKWroclawAPI';

export const SET_MPK = 'SET_MPK';
export const LOADING_MPK = 'LOADING_MPK';
export const ERROR_MPK = 'ERROR_MPK';
export const ADD_MPK = 'ADD_MPK';
export const REMOVE_MPK = 'REMOVE_MPK';
export const UPDATE_MPK = 'UPDATE_MPK';

const API = new MPKWroclawAPI();

export const setMarkers = markers => ({
  type: SET_MPK,
  loading: false,
  markers,
});

export const loadingMarkers = () => ({
  type: LOADING_MPK,
  loading: true,
  error: null,
});

export const errorMarkers = error => ({
  type: ERROR_MPK,
  loading: false,
  error,
});

export const setMarkersRequest = (...ids) => (
  (dispatch) => {
    dispatch(loadingMarkers());
    API.getPosition(...ids)
      .then(markers => dispatch(setMarkers(live)))
      .catch(error => dispatch(setMarkers(live)));
      // .catch(error => dispatch(errorMarkers(error.message))); // TODO: fix API due to cors error
  }
);

export const addMarker = marker => ({
  type: ADD_MPK,
  marker,
});

export const removeMarker = marker => ({
  type: REMOVE_MPK,
  marker,
});

export const updateMarker = marker => ({
  type: UPDATE_MPK,
  marker,
});
