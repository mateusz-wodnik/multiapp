import moment from 'moment';
import OpenWeather from '../../APIS/openWeatherAPI';

export const SET_ACTUAL = 'SET_ACTUAL';
export const LOADING_ACTUAL = 'LOADING_ACTUAL';
export const ERROR_ACTUAL = 'ERROR_ACTUAL';
export const SET_FORECAST = 'SET_FORECAST';
export const LOADING_FORECAST = 'LOADING_FORECAST';
export const ERROR_FORECAST = 'ERROR_FORECAST';
const API = new OpenWeather();

export const setWeather = weather => ({
  type: SET_ACTUAL,
  loading: false,
  ...weather,
});

export const loadingWeather = () => ({
  type: LOADING_ACTUAL,
  loading: true,
  error: null,
});

export const errorWeather = error => ({
  type: ERROR_ACTUAL,
  loading: false,
  error,
});

export const setWeatherRequest = () => (
  (dispatch) => {
    dispatch(loadingWeather());
    API.actual('Wroclaw')
      .then((res) => {
        const {
          weather, main, wind, dt,
        } = res;
        const normalized = {
          icon: weather[0].icon,
          main: weather[0].main,
          wind,
          date: moment(dt * 1000),
          ...main,
        };
        dispatch(setWeather(normalized));
      })
      .catch(error => dispatch(errorWeather(error.message)));
  }
);

export const setForecast = items => ({
  type: SET_FORECAST,
  loading: false,
  items,
});

export const loadingForecast = () => ({
  type: LOADING_FORECAST,
  loading: true,
  error: null,
});

export const errorForecast = error => ({
  type: ERROR_FORECAST,
  loading: false,
  error,
});

export const setForecastRequest = () => (
  (dispatch) => {
    dispatch(loadingForecast());
    const actDay = moment().day();
    API.forecast('Wroclaw')
      .then((res) => {
        // Find first index of next day forecast item
        const last = res.list.findIndex(item => (
          moment(item.dt * 1000).day() === actDay + 1
        ));
        const items = res.list.slice(0, last);
        const normalized = items.map((item) => {
          const {
            weather, main, wind, dt,
          } = item;
          return {
            icon: weather[0].icon,
            main: weather[0].main,
            wind,
            date: moment(dt * 1000),
            ...main,
          };
        });
        dispatch(setForecast(normalized));
      })
      .catch(error => dispatch(errorForecast(error.message)));
  }
);