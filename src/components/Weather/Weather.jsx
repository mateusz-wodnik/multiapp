import React, {Component} from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import styles from './Weather.module.sass';
import DateInfo from '../../modules/DateInfo/DateInfo';
import * as actions from './actions';

class Weather extends Component {
  componentDidMount() {
    const { setWeatherRequest } = this.props;
    setWeatherRequest();
  }

  render() {
    const { wind, main, weather } = this.props;
    return (
      <header className={styles.container}>
        <DateInfo styles={styles}>
          <span className={styles.wind}>{`${wind.speed} m/s`}</span>
        </DateInfo>
        <h4 className={styles.temperature}>{`${main.temp}℃`}</h4>
        <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].main}
             className={styles.icon}/>
      </header>
    );
  }
}

Weather.defaultProps = {
  wind: {},
  main: {},
  weather: [{}],
  setWeatherRequest: () => null,
};

Weather.propTypes = {
  wind: PropTypes.objectOf(PropTypes.string),
  main: PropTypes.objectOf(PropTypes.string),
  weather: PropTypes.arrayOf(PropTypes.object),
  setWeatherRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  ...state.weather,
});

export default connect(mapStateToProps, { ...actions })(Weather);
