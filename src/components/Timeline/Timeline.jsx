import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Timeline.sass';

const Timeline = ({ tasks }) => (
  <article className={styles.container}>
    <span className={styles.line} />
    {tasks.map(task => <div key={task._id} className={styles.item}>{task.title}</div>)}
  </article>
);

Timeline.defaultProps = {
  tasks: [],
};

Timeline.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};


const mapStateToProps = state => ({
  tasks: state.taskManager.list,
});

export default connect(mapStateToProps)(Timeline);
