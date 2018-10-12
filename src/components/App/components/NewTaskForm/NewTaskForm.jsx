import React, { Component } from 'react';
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
        <textarea
          className={bs['form-control']}
          name="description"
          placeholder="Description"
          aria-label="Description"
        />
        <select multiple className={bs['form-control']} name="categories" defaultValue="categories">
          <option value="categories" disabled hidden>category</option>
          <option value="important">important</option>
          <option value="fun">fun</option>
          <option value="work">work</option>
          <option value="family">family</option>
        </select>
        <div className={bs['input-group']}>
          <div className={`${bs['input-group-prepend']}`}>
            <input className={`${bs.btn} ${bs['btn-danger']}`} placeholder="Reset" type="reset" />
          </div>
          <input type="date" className={bs['form-control']} name="date" defaultValue={new Date()} />
          <input type="time" className={bs['form-control']} name="time" defaultValue={new Date()} />
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
