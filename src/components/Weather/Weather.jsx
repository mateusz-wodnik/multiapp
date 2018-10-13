import React from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Weather.sass';
import DateInfo from '../../modules/DateInfo/DateInfo';
import data from './weather.data';


const Weather = () => (
  <header className={styles.container}>
    <DateInfo styles={styles}>
      <span className={styles.wind}>{`${data.wind.speed} m/s`}</span>
    </DateInfo>
    <h4 className={styles.temperature}>{`${data.main.temp}℃`}</h4>
    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} className={styles.icon} />
  </header>
);

export default Weather;
