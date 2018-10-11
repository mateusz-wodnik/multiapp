import React, { Component } from 'react';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BasicHeader.sass';
import Clock from '../../../../modules/Clock/Clock';
import dateParser from '../../../../_utils/dateParser';

class BasicHeader extends Component {
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
    return (
      <header className={`${styles.container}`}>
        <time className={styles.day}>{dayTablePL[day - 1]}</time>
        <Clock className={styles.clock} />
        <time className={styles.date} dateTime={`${year}-${month}-${day}`}>{`${day}/${month}/${year}`}</time>
        <button type="button" className={`${styles.config} ${bs.btn} ${bs['btn-outline-warning']}`}>⚙</button>
      </header>
    );
  }
}

export default BasicHeader; // eslint-disable-line
