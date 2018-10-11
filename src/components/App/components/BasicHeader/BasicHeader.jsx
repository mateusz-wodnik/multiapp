import React, { Component } from 'react';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BasicHeader.sass';
import Clock from '../../../../modules/Clock/Clock';
import dateParser from '../../../../_utils/dateParser';

class BasicHeader extends Component {
  state = {
    day: '',
    month: '',
    year: '',
  };

  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const act = new Date();
    this.setState(dateParser(act));
  };

  render() {
    const { day, month, year } = this.state;
    return (
      <article className={`${styles.container}`}>
        <time>{day}</time>
        <Clock />
        <time dateTime={`${year}-${month}-${day}`}>{`${day}/${month}/${year}`}</time>
      </article>
    );
  }
}

export default BasicHeader; // eslint-disable-line
