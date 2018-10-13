import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import Clock from '../Clock/Clock';
import dateParser from '../../_utils/dateParser';

class DateInfo extends Component {
  state = {
    day: '',
    month: '',
    year: '',
    dayTablePL: [],
  };

  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const act = new Date();
    this.setState(dateParser(act));
  };

  render() {
    const {
      day, month, year, dayTablePL,
    } = this.state;
    const { styles, children } = this.props;
    return (
      <div className={styles.dateInfo}>
        <time className={styles.day}>{dayTablePL[day - 1]}</time>
        <Clock className={styles.clock} />
        <time className={styles.date} dateTime={`${year}-${month}-${day}`}>{`${day}/${month}/${year}`}</time>
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
