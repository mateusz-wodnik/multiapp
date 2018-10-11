import React, { Component } from 'react';
import timeParser from '../../_utils/timeParser';

class Clock extends Component {
  state = {
    time: '',
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
      this.setState({ time: timeParser(act) });
    }, 1000);
  };

  stopClock = () => {
    clearInterval(this.clock);
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <time>{time}</time>
      </div>
    );
  }
}

export default Clock;
