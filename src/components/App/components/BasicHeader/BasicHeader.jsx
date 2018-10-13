import React, { Component } from 'react';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BasicHeader.sass';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import DateInfo from '../../../../modules/DateInfo/DateInfo';

class BasicHeader extends Component {
  state = {
    isFormOpened: false,
  };

  toggleForm = () => {
    this.setState(state => ({ isFormOpened: !state.isFormOpened }));
  };

  render() {
    const { isFormOpened } = this.state;
    return (
      <header className={`${styles.container}`}>
        <DateInfo styles={styles} />
        <button
          type="button"
          className={`${styles.open} ${bs.btn} ${bs['btn-primary']}`}
          onClick={this.toggleForm}
        >
          {isFormOpened ? '🖉' : '+'}
        </button>
        {isFormOpened && (
          <NewTaskForm toggleForm={this.toggleForm} styles={styles} />
        )}
      </header>
    );
  }
}

export default BasicHeader; // eslint-disable-line
