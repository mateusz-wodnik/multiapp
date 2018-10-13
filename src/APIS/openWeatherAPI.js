import APIKeys from './APIKeys';

export default class openWeather {
  constructor() {
    this.key = APIKeys.openWeather;
    this.weather = `api.openweathermap.org/data/2.5/weather?APPID=${this.key}&units=metric`;
    this.forecast = `api.openweathermap.org/data/2.5/forecast?APPID=${this.key}&units=metric`;
  }

  actual(city) {
    fetch(`${this.weather}&q=${city}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  }

  forecast(city) {
    fetch(`${this.forecast}&q=${city}`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  }
}
