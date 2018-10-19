import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class Clock extends Component {
  state = {
    time: moment(),
  };

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    this.clock = setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
  };

  stopClock = () => {
    clearInterval(this.clock);
  };

  render() {
    const { time } = this.state;
    const { className } = this.props;
    return <time className={className}>{time.format('HH:mm:ss')}</time>;
  }
}

Clock.defaultProps = {
  className: '',
};

Clock.propTypes = {
  className: PropTypes.string,
};

export default Clock;
