import { cloneElement, Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { setListRequest, updateTaskRequest, removeTaskRequest } from './actions';

class TasksManager extends Component {
  componentDidMount() {
    const { setListRequest } = this.props;
    setListRequest();
  }

  render() {
    const { children, ...props } = this.props;
    return (
      cloneElement(children, props)
    );
  }
};

TasksManager.defaultProps = {
  children: null,
  allowEditing: false,
  setListRequest: () => null,
};

TasksManager.propTypes = {
  children: PropTypes.node,
  allowEditing: PropTypes.bool,
  setListRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  items: state.taskManager.tasks.items,
  allCategories: state.taskManager.categories,
});

export default connect(mapStateToProps, { setListRequest, updateTaskRequest, removeTaskRequest })(TasksManager);
