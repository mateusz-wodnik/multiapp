import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './Timeline.module.sass';
import bs from '../../styles/bootstrap.module.css';
import { setForecastRequest } from '../Weather/actions';

class Timeline extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const { setForecastRequest, tasks, forecast, onlyWeather } = this.props;
    setForecastRequest();
    if (onlyWeather) return this.updateItems(forecast);
    const timeline = this.createTimeline(tasks, forecast);
    this.updateItems(timeline);
  }

  componentDidUpdate(prevProps) {
    const { onlyWeather, tasks, forecast } = this.props;
    if (prevProps !== this.props) {
      if (onlyWeather) return this.updateItems(forecast);
      const timeline = this.createTimeline(tasks, forecast);
      this.updateItems(timeline);
    }
  }

  updateItems = items => this.setState({ items });

  createTimeline = (tasks, forecast) => (
    [...tasks, ...forecast].sort((a, b) => (
      moment(a.date) - moment(b.date)
    ))
  );

  render() {
    const { items } = this.state;
    return (
      <article id="timeline" className={styles.container}>
        {items.map(item => (
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
  tasks: [],
  forecast: [],
  onlyWeather: false,
};

Timeline.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object1),
  forecast: PropTypes.arrayOf(PropTypes.object1),
  onlyWeather: PropTypes.bool,
};

const mapStateToProps = state => ({
  tasks: state.taskManager.tasks.items,
  forecast: state.weather.forecast.items,
});

export default connect(mapStateToProps, { setForecastRequest })(Timeline);
