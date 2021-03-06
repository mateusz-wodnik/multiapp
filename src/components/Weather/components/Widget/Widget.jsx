import React from 'react';
import PropTypes from 'prop-types';
import styles from './Widget.module.sass';
import DateInfo from '../../../../modules/DateInfo/DateInfo';
import Clock from '../../../../modules/Clock/Clock';

const Widget = ({
  wind, temp, icon, main,
}) => (
  <header id="weather" className={styles.container}>
    <DateInfo styles={styles}>
      <Clock className={styles.clock} />
    </DateInfo>
    <span className={styles.wind}>{`${wind.speed} m/s`}</span>
    <h4 className={styles.temperature}>{`${temp}℃`}</h4>
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt={main}
      className={styles.icon}
    />
  </header>
);

Widget.defaultProps = {
  wind: {},
  icon: '',
  main: '',
  temp: 8,
};

Widget.propTypes = {
  wind: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string,
  main: PropTypes.string,
  temp: PropTypes.number,
};

export default Widget;
