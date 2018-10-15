import React, { Component } from 'react';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './BasicHeader.module.sass';
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
