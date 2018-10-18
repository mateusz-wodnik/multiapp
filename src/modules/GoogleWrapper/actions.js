import GooglePlacesAPI from '../../APIS/googlePlacesAPI';

export const SET_GOOGLE_MAPS = 'SET_GOOGLE_MAPS';
export const LOADING_GOOGLE_MAPS = 'LOADING_GOOGLE_MAPS';
export const ERROR_GOOGLE_MAPS = 'ERROR_GOOGLE_MAPS';
export const REMOVE_GOOGLE_MAPS = 'REMOVE_GOOGLE_MAPS';

const API = new GooglePlacesAPI();

export const success = () => ({
  type: SET_GOOGLE_MAPS,
  loading: false,
  service: true,
});

export const loading = () => ({
  type: LOADING_GOOGLE_MAPS,
  loading: true,
  error: null,
});

export const fail = error => ({
  type: ERROR_GOOGLE_MAPS,
  loading: false,
  error,
});

export const setGoogleMapsServiceRequest = (...libraries) => (
  (dispatch) => {
    dispatch(loading());
    API.init(libraries)
      .then(() => dispatch(success()))
      .catch(error => dispatch(fail(error.message)));
  }
);

export const removeGoogleMapsService = place => ({
  type: REMOVE_GOOGLE_MAPS,
  loading: false,
  place,
});
