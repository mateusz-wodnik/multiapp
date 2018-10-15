import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
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
    const { tasks, removeTaskRequest } = this.props;
    return (
      <ul className={`${styles.container} ${bs['list-group']}`}>
        {tasks.map(task => <li key={task._id} className={`${styles.item} ${bs['list-group-item']}`}><Task {...task} removeTask={removeTaskRequest} /></li>)} {/*eslint-disable-line*/}
      </ul>
    );
  }
}

List.defaultProps = {
  setListRequest: () => null,
  tasks: [],
  removeTaskRequest: () => null,
};

List.propTypes = {
  setListRequest: PropTypes.func,
  tasks: PropTypes.arrayOf(PropTypes.object),
  removeTaskRequest: PropTypes.func,
};

const handleFilter = (list, filters) => (
  filters.length
    ? list.filter(item => filters.some(filter => item.categories.includes(filter)))
    : list
);

const mapStateToProps = state => ({
  tasks: handleFilter(state.taskManager.list, state.taskManager.filters),
});

export default connect(mapStateToProps, { ...actions })(List);
