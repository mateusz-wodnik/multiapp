import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
// import bs from 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Timeline.sass';
import timeParser from '../../_utils/timeParser';
import data from './forecast.data';

const setWeather = (hour) => {
  if (hour > 21) {
    return data.list[12];
  } else if (hour > 18) { // eslint-disable-line
    return data.list[11];
  } else if (hour > 15) {
    return data.list[10];
  } else if (hour > 15) {
    return data.list[9];
  } else if (hour > 12) {
    return data.list[8];
  } else if (hour > 9) {
    return data.list[7];
  } else if (hour > 6) {
    return data.list[6];
  } else if (hour > 3) {
    return data.list[5];
  } else if (hour >= 0) {
    return data.list[4];
  }
  return 'No weather data';
};

const Timeline = ({ tasks }) => {
  const timeToString = (date) => {
    const time = timeParser(new Date(date));
    return `${time.hours}:${time.minutes}`;
  };
  data.list.forEach(item => console.log(new Date(item.dt * 1000).getHours() - 1));
  return (
    <article className={styles.container}>
      {/* <span className={styles.line} /> */}
      {tasks.map(task => (
        <div key={task._id} className={styles.item}>
          <span className={styles.title}>{task.title}</span>
          <span className={styles.time}>{timeToString(task.date)}</span>
          <img src={`http://openweathermap.org/img/w/${setWeather(task.date.getHours()).weather[0].icon}.png`} className={styles.weather} alt="icon" />
        </div>
      ))}
    </article>
  );
};

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
