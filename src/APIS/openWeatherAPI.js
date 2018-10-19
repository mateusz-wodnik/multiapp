import APIKeys from './APIKeys';

export default class openWeather {
  constructor() {
    this.key = APIKeys.openWeather;
    this.weatherURL = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.key}&units=metric`;
    this.forecastURL = `https://api.openweathermap.org/data/2.5/forecast?APPID=${this.key}&units=metric`;
  }

  actual(city) {
    return fetch(`${this.weatherURL}&q=${city}`)
      .then(res => res.json());
  }

  forecast(city) {
    return fetch(`${this.forecastURL}&q=${city}`)
      .then(res => res.json());
  }
}
