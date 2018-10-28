import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './Timeline.module.sass';
import bs from '../../styles/bootstrap.module.css';
import { setForecastRequest } from '../Weather/actions';

class Timeline extends Component {
  componentDidMount() {
    const { setForecastRequest } = this.props;
    setForecastRequest();
  }

  render() {
    const { timeline } = this.props;
    return (
      <article className={`${styles.container} ${bs.container}`}>
        {timeline.map(item => (
          <a href={`#${item._id}`} key={item._id || item.date} className={styles.item}>
            {item.title && <span className={styles.title}>{item.title}</span>}
            {item.icon && (
              <img
                src={`http://openweathermap.org/img/w/${item.icon}.png`}
                className={styles.weather}
                alt={item.main}
              />
            )}
            {item.temp && <span className={styles.temp}>{item.temp}℃</span>}
            <time className={styles.time}>{moment(item.date).format('HH:mm')}</time>
          </a>
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
    moment(a.date) - moment(b.date)
  ))
);

const mapStateToProps = state => ({
  tasks: state.taskManager.tasks.items,
  forecast: state.weather.forecast,
  timeline: createTimeline(state.taskManager.tasks.items, state.weather.forecast.items),
});

export default connect(mapStateToProps, { setForecastRequest })(Timeline);
