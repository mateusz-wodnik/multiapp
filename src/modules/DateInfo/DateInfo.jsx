import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateInfo extends Component {
  state = {
    time: moment(),
  };

  componentDidMount() {
    this.setState({ time: moment() });
  }

  render() {
    const { time } = this.state;
    const { styles, children } = this.props;
    return (
      <div className={styles.dateInfo}>
        <time className={styles.day}>{time.format('dddd')}</time>
        <time className={styles.date} dateTime={time.format('YYYY-MM-DD')}>{time.format('LL')}</time>
        {children}
      </div>
    );
  }
}

DateInfo.defaultProps = {
  styles: '',
  children: null,
};

DateInfo.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
};

export default DateInfo;
