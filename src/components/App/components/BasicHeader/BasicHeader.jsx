import React, { Component } from 'react';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BasicHeader.sass';
import Clock from '../../../../modules/Clock/Clock';
import dateParser from '../../../../_utils/dateParser';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

class BasicHeader extends Component {
  state = {
    day: '',
    month: '',
    year: '',
    dayTablePL: [],
    isFormOpened: false,
  };

  componentDidMount() {
    this.setDate();
  }

  setDate = () => {
    const act = new Date();
    this.setState(dateParser(act));
  };

  toggleForm = () => {
    this.setState(state => ({ isFormOpened: !state.isFormOpened }));
  };

  render() {
    const {
      day, month, year, dayTablePL, isFormOpened,
    } = this.state;
    return (
      <header className={`${styles.container}`}>
        <time className={styles.day}>{dayTablePL[day - 1]}</time>
        <Clock className={styles.clock} />
        <time className={styles.date} dateTime={`${year}-${month}-${day}`}>{`${day}/${month}/${year}`}</time>
        <button
          type="button"
          className={`${styles.open} ${bs.btn} ${bs['btn-primary']}`}
          onClick={this.toggleForm}
        >
          {isFormOpened ? '🖉' : '+'}
        </button>
        {isFormOpened && <NewTaskForm styles={{ container: styles.formContainer }} />}
      </header>
    );
  }
}

export default BasicHeader; // eslint-disable-line
