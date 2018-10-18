import APIKeys from './APIKeys';

export default class openWeather {
  constructor() {
    this.key = APIKeys.openWeather;
    this.weather = `https://api.openweathermap.org/data/2.5/weather?APPID=${this.key}&units=metric`;
    this.forecast = `https://api.openweathermap.org/data/2.5/forecast?APPID=${this.key}&units=metric`;
  }

  actual(city) {
    return fetch(`${this.weather}&q=${city}`)
      .then(res => res.json());
  }

  forecast(city) {
    fetch(`${this.forecast}&q=${city}`)
      .then(res => res.json());
  }
}
