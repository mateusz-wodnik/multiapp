import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.sass';
import bs from '../../../../styles/bootstrap.module.css';
import moment from 'moment';
import Timeline from '../../../Timeline/Timeline';

const Page = ({
  wind, temp, icon, main, pressure, humidity, temp_max: tempMax, temp_min: tempMin,
  forecast: { items },
}) => (
  <article className={styles.container}>
    <ul className={`${bs['list-group']} ${bs['list-group-flush']}`}>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        {main}
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={main}
          className={styles.value}
        />
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        temperature
        <span className={styles.value}>{temp}℃</span>
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        wind speed
        <span className={styles.value}>{!!wind && wind.speed} m/s</span>
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        pressure
        <span className={styles.value}>{pressure} ㍱</span>
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        humidity
        <span className={styles.value}>{humidity}%</span>
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        Minimal temperature
        <span className={styles.value}>{tempMin}℃</span>
      </li>
      <li className={`${styles.item} ${bs['list-group-item']}`}>
        Maximal temperature
        <span className={styles.value}>{tempMax}℃</span>
      </li>
    </ul>
    <Timeline onlyWeather={true} />
  </article>
);

Page.defaultProps = {
  wind: {},
  icon: '',
  main: '',
  temp: 8,
  pressure: 1022,
  humidity: 93,
  temp_min: 8,
  temp_max: 8,
};

Page.propTypes = {
  wind: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string,
  main: PropTypes.string,
  temp: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
};

export default Page;
