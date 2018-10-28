import { Component, cloneElement } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { setWeatherRequest, setForecastRequest } from './actions';

class Weather extends Component {
  componentDidMount() {
    const { setWeatherRequest, setForecastRequest, setForecast } = this.props;
    setWeatherRequest();
    if (setForecast) setForecastRequest();
  }

  render() {
    const { children, ...props } = this.props;
    return cloneElement(children, props);
  }
}

Weather.defaultProps = {
  children: null,
  setWeatherRequest: () => null,
  setForecastRequest: () => null,
  setForecast: false,
};

Weather.propTypes = {
  children: PropTypes.node,
  setWeatherRequest: PropTypes.func,
  setForecastRequest: PropTypes.func,
  setForecast: PropTypes.bool,
};

const mapStateToProps = state => ({
  ...state.weather.actual,
  forecast: state.weather.forecast,
});

export default connect(mapStateToProps, { setWeatherRequest, setForecastRequest })(Weather);
