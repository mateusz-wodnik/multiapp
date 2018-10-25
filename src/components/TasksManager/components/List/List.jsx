import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import moment from 'moment';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './List.module.sass';
import Task from '../Task/Task';
import * as actions from './actions';

export class List extends Component {
  componentDidMount() {
    const { setListRequest } = this.props;
    setListRequest();
  }

  render() {
    const { tasks, allCategories, removeTaskRequest, updateTaskRequest, allowEditing } = this.props;
    return (
      <ul className={`${styles.container} ${bs['list-group']}`}>
        {tasks.map(task => (
          <li key={task._id} className={`${styles.item}`}>
            <Task {...task} allowEditing={allowEditing} updateTaskRequest={updateTaskRequest} allCategories={allCategories} removeTask={removeTaskRequest} />
          </li>
        ))}
      </ul>
    );
  }
}

List.defaultProps = {
  setListRequest: () => null,
  tasks: [],
  allCategories: [],
  removeTaskRequest: () => null,
  allowEditing: false,
};

List.propTypes = {
  setListRequest: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  allCategories: PropTypes.arrayOf(PropTypes.string),
  removeTaskRequest: PropTypes.func,
  allowEditing: PropTypes.bool,
};

const handleFilter = (list, filters) => (
  filters.length
    ? list.filter(item => filters.some(filter => item.categories.includes(filter)))
    : list
);

const mapStateToProps = state => ({
  tasks: handleFilter(state.taskManager.list, state.taskManager.filters).sort((a, b) => (
    moment(a.date) - moment(b.date)
  )),
  allCategories: state.taskManager.categories,
});

export default connect(mapStateToProps, { ...actions })(List);
