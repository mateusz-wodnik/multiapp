import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './List.module.sass';
import Task from '../Task/Task';

export class List extends Component {
  sortByDate = toSort => (
    toSort.sort((a, b) => (
      moment(a.date) - moment(b.date)
    ))
  );

  render() {
    const {
      items, allCategories, removeTaskRequest, updateTaskRequest, allowEditing,
    } = this.props;
    console.log(items)
    return (
      <ul className={`${styles.container} ${bs['list-group']}`}>
        {this.sortByDate(items).map(task => (
          <li key={task._id} id={task._id}  className={`${styles.item}`}>
            <Task
              {...task}
              allowEditing={allowEditing}
              updateTaskRequest={updateTaskRequest}
              allCategories={allCategories}
              removeTask={removeTaskRequest}
            />
          </li>
        ))}
      </ul>
    );
  }
}

List.defaultProps = {
  setListRequest: () => null,
  updateTaskRequest: () => null,
  items: [],
  allCategories: [],
  removeTaskRequest: () => null,
  allowEditing: false,
};

List.propTypes = {
  setListRequest: PropTypes.func,
  updateTaskRequest: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  allCategories: PropTypes.arrayOf(PropTypes.string),
  removeTaskRequest: PropTypes.func,
  allowEditing: PropTypes.bool,
};

export default List;
