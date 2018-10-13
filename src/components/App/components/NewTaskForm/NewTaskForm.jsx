import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../../../TasksManager/components/List/actions';

class NewTaskForm extends Component {
  handleForm = (e) => {
    e.preventDefault();
    const { addTaskRequest } = this.props;
    const {
      title, date, time, description, categories,
    } = e.target;
    const dateString = `${date.value} ${time.value}`;
    const dateObj = new Date(...dateString.split(/\D/));
    const task = {
      title: title.value,
      description: description.value,
      date: dateObj,
      categories: [...categories.selectedOptions].map(option => option.value),
    };
    addTaskRequest(task);
  };

  render() {
    const { styles, toggleForm } = this.props;
    return createPortal(
      <form className={styles.formContainer} onSubmit={this.handleForm}>
        <button type="button" className={styles.close} onClick={toggleForm}>X</button>
        <input
          type="text"
          className={bs['form-control']}
          name="title"
          placeholder="Title"
          aria-label="Title"
        />
        <textarea
          className={bs['form-control']}
          name="description"
          placeholder="Description"
          aria-label="Description"
          rows="5"
        />
        {/* TODO Add input for custom categories  */}
        <select multiple className={bs['form-control']} name="categories" defaultValue="categories">
          <option value="categories" disabled hidden>category</option>
          <option value="important">important</option>
          <option value="fun">fun</option>
          <option value="work">work</option>
          <option value="family">family</option>
          <option value="meeting">meeting</option>
          <option value="eating">eating</option>
          <option value="shopping">shopping</option>
        </select>
        <div className={`${bs['input-group']}`}>
          <div className={`${bs['input-group-prepend']}`}>
            <span className={`${bs['input-group-text']}`}>Set date</span>
          </div>
          <input type="date" className={bs['form-control']} name="date" defaultValue={new Date()} />
        </div>
        <div className={`${bs['input-group']}`}>
          <div className={`${bs['input-group-prepend']}`}>
            <span className={`${bs['input-group-text']}`}>Set time</span>
          </div>
          <input type="time" className={bs['form-control']} name="time" defaultValue={new Date()} />
        </div>
        <div className={bs['input-group']}>
          <input className={`${bs.btn} ${bs['btn-danger']} ${bs['form-control']}`} placeholder="Reset" type="reset" />
          <button className={`${bs.btn} ${bs['btn-success']} ${bs['form-control']}`} type="submit">Add</button>
        </div>
      </form>,
      document.querySelector('#modal'),
    );
  }
}

NewTaskForm.defaultProps = {
  styles: {},
  addTaskRequest: () => null,
  toggleForm: () => null,
};

NewTaskForm.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  addTaskRequest: PropTypes.func,
  toggleForm: PropTypes.func,
};

// const mapStateToProps = state => ({});

export default connect(null, { ...actions })(NewTaskForm);
