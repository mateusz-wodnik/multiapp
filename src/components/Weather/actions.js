/* eslint-disable */

import openWeather from '../../APIS/openWeatherAPI';

export const SET_ACTUAL = 'SET_ACTUAL';
export const SET_FORECAST = 'SET_FORECAST';
const API = new openWeather();

export const setWeather = weather => ({
  type: SET_ACTUAL,
  ...weather,
});

export const setWeatherRequest = () => (
  (dispatch) => {
    API.actual('Wroclaw')
      .then(res => {
        const { weather, main, wind, dt } = res;
        const normalized = {
          icon: weather[0].icon,
          main: weather[0].main,
          wind,
          dt,
          ...main,
        };
        dispatch(setWeather(normalized))
      })
      .catch(console.error);
  }
);

export const setForecast = items => ({
  type: SET_FORECAST,
  items,
});

export const setForecastRequest = () => (
  (dispatch) => {
    console.log(API)
    const actDay = new Date().getDay();
    console.log(actDay)
    API.forecast('Wroclaw')
      .then(res => {
        const last = res.list.findIndex(item => {
          return new Date(item.dt  * 1000).getDay() === actDay + 1
        });
        const items = res.list.slice(0, last);
        const normalized = items.map(item => {
          const { weather, main, wind, dt } = item;
          return {
            icon: weather[0].icon,
            main: weather[0].main,
            wind,
            date: new Date(dt * 1000),
            ...main,
          };
        });
        dispatch(setForecast(normalized))
      })
      .catch(console.error);
  }
);