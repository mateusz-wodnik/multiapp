import live from './live.data';
import MPKWroclawAPI from '../../../../APIS/MPKWroclawAPI';
import geoJSONParser from '../../../../_utils/geoJSONParser';

export const SET_MPK = 'SET_MPK';
export const LOADING_MPK = 'LOADING_MPK';
export const ERROR_MPK = 'ERROR_MPK';

const API = new MPKWroclawAPI();

export const set = markers => ({
  type: SET_MPK,
  loading: false,
  markers,
});

export const loading = () => ({
  type: LOADING_MPK,
  loading: true,
  error: null,
});

export const error = message => ({
  type: ERROR_MPK,
  loading: false,
  error: message,
});

export const setMarkersRequest = ids => (
  (dispatch) => {
    dispatch(loading());
    API.getPosition(ids)
      .then((markers) => {
        const features = geoJSONParser(live, 'x', 'y');
        dispatch(set(features));
      })
      .catch(error => {
        const features = geoJSONParser(live, 'x', 'y');
        dispatch(set(features));
      });
      // .catch(error => dispatch(errorMarkers(error.message))); // TODO: fix API due to cors error
  }
);