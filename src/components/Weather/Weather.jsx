import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import styles from './Weather.module.sass';
import DateInfo from '../../modules/DateInfo/DateInfo';
import * as actions from './actions';
import bs from '../../styles/bootstrap.module.css';
import Clock from '../../modules/Clock/Clock';

class Weather extends Component {
  componentDidMount() {
    const { setWeatherRequest } = this.props;
    setWeatherRequest();
  }

  render() {
    const {
      wind,
      temp,
      icon,
      main,
    } = this.props;
    return (
      <header className={`${styles.container} ${bs.container}`}>
        <DateInfo styles={styles}>
          <Clock className={styles.clock} />
          <span className={styles.wind}>{`${wind.speed} m/s`}</span>
        </DateInfo>
        <h4 className={styles.temperature}>{`${temp}℃`}</h4>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={main}
          className={styles.icon}
        />
      </header>
    );
  }
}

Weather.defaultProps = {
  wind: {},
  icon: '',
  main: '',
  dt: 1539905400,
  temp: 8,
  pressure: 1022,
  humidity: 93,
  temp_min: 8,
  temp_max: 8,
  setWeatherRequest: () => null,
};

Weather.propTypes = {
  wind: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string,
  main: PropTypes.string,
  dt: PropTypes.number,
  temp: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
  setWeatherRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  ...state.weather.actual,
});

export default connect(mapStateToProps, { ...actions })(Weather);
