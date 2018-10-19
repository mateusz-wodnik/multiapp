import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Timeline.module.sass';
import timeParser from '../../_utils/timeParser';
import data from './forecast.data';
import bs from '../../styles/bootstrap.module.css';
import { setForecastRequest } from '../Weather/actions';

class Timeline extends Component {
  componentDidMount() {
    const { setForecastRequest } = this.props;
    setForecastRequest();
  }

  timeToString = (date) => {
    const time = timeParser(new Date(date));
    return `${time.hours}:${time.minutes}`;
  };

  render() {
    const { timeline } = this.props;
    return (
      <article className={`${styles.container} ${bs.container}`}>
        {/* <span className={styles.line} /> */}
        {timeline.map(task => (
          <div key={task._id} className={styles.item}>
            {!task.icon && <span className={styles.title}>{task.title}</span>}
            {task.icon && (
              <img
                src={`http://openweathermap.org/img/w/${task.icon}.png`}
                className={styles.weather}
                alt="icon"
              />
            )}
            <span className={styles.time}>{this.timeToString(task.date)}</span>
          </div>
        ))}
      </article>
    );
  }
}

Timeline.defaultProps = {
  timeline: [],
};

Timeline.propTypes = {
  timeline: PropTypes.arrayOf(PropTypes.object),
};

const createTimeline = (tasks, forecast) => (
  [...tasks, ...forecast].sort((a, b) => (
    a.date.getTime() - b.date.getTime()
  ))
);

const mapStateToProps = state => ({
  tasks: state.taskManager.list,
  forecast: state.weather.forecast,
  timeline: createTimeline(state.taskManager.list, state.weather.forecast.items),
});

export default connect(mapStateToProps, { setForecastRequest })(Timeline);
