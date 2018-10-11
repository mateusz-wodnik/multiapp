import React, { Component } from 'react';
import PropTypes from 'prop-types';
import timeParser from '../../_utils/timeParser';

class Clock extends Component {
  state = {
    hours: '',
    minutes: '',
    seconds: '',
  };

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    this.clock = setInterval(() => {
      const act = new Date();
      this.setState(timeParser(act));
    }, 1000);
  };

  stopClock = () => {
    clearInterval(this.clock);
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    const { className } = this.props;
    return <time className={className}>{`${hours}:${minutes}:${seconds}`}</time>;
  }
}

Clock.defaultProps = {
  className: '',
};

Clock.propTypes = {
  className: PropTypes.string,
};

export default Clock;
