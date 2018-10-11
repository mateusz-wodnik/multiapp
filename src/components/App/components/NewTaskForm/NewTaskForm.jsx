import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../../../TasksManager/components/List/actions';

class NewTaskForm extends Component {
  generateOptions = (quantity) => {
    const output = [];
    for (let i = 0; i <= quantity; i++) { // eslint-disable-line
      output.push(<option key={i} value={i}>{i}</option>);
    }
    return output;
  };

  handleForm = (e) => {
    e.preventDefault();
    const { addTaskRequest } = this.props;
    const { title, hour, minute } = e.target;
    const task = {
      title: title.value,
      hour: hour.value,
      minute: minute.value,
      categories: ['important'],
    };
    addTaskRequest(task);
  };

  render() {
    const { styles } = this.props;
    return (
      <form className={`${styles.container}`} onSubmit={this.handleForm}>
        <input
          type="text"
          className={bs['form-control']}
          name="title"
          placeholder="Title"
          aria-label="Title"
        />
        <div className={bs['input-group']}>
          <div className={`${bs['input-group-prepend']}`}>
            <input className={`${bs.btn} ${bs['btn-danger']}`} placeholder="Reset" type="reset" />
          </div>
          <select
            name="hour"
            className={`${bs['custom-select']}`}
            defaultValue="Hours"
            aria-label="Select hour"
          >
            <option value="Hours" hidden disabled>Hours</option>
            {this.generateOptions(23)}
          </select>
          <select
            name="minute"
            className={`${bs['custom-select']}`}
            defaultValue="Minutes"
            aria-label="Select minutes"
          >
            <option value="Minutes" hidden disabled>Minutes</option>
            {this.generateOptions(59)}
          </select>
          <div className={`${bs['input-group-append']}`}>
            <button className={`${bs.btn} ${bs['btn-success']}`} type="submit">Add</button>
          </div>
        </div>
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  styles: {},
  addTaskRequest: () => null,
};

NewTaskForm.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  addTaskRequest: PropTypes.func,
};

// const mapStateToProps = state => ({});

export default connect(null, { ...actions })(NewTaskForm);
