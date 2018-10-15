/* eslint-disable */

import openWeather from '../../APIS/openWeatherAPI';

export const SET_WEATHER = 'SET_WEATHER';
const API = new openWeather();

export const setWeather = weather => ({
  type: SET_WEATHER,
  weather,
});

export const setWeatherRequest = () => (
  (dispatch) => {
    API.actual('Wroclaw')
      .then(weather => dispatch(setWeather(weather)))
      .catch(console.error);
  }
);