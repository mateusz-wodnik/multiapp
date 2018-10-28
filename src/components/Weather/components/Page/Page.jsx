import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.sass';
import bs from '../../../../styles/bootstrap.module.css';
import moment from 'moment';

const Page = ({
  wind, temp, icon, main, pressure, humidity, temp_max: tempMax, temp_min: tempMin,
  forecast: { items },
}) => (
  <article className={`${styles.container} ${bs.container}`}>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={main}
      className={styles.icon}
    />
    <div className={styles.main}>{main}</div>
    <div className={styles.temperature}>{`${temp}℃`}</div>
    <div className={styles.wind}>{`${!!wind && wind.speed} m/s`}</div>
    <div className={styles.pressure}>{pressure}</div>
    <div className={styles.humidity}>{humidity}</div>
    <div className={styles.tempMin}>{tempMin}</div>
    <div className={styles.tempMax}>{tempMax}</div>
    {items.map(item => (
      <div>
        <span>{item.main}</span>
        <span>{moment(item.date).day()}</span>
      </div>
    ))}
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
