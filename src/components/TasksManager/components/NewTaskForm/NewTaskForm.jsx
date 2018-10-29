import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import moment from 'moment';
import bs from '../../../../styles/bootstrap.module.css';
import buttonStyles from '../../../App/components/BasicHeader/BasicHeader.module.sass';
import styles from './NewTaskForm.module.sass';
import { addTaskRequest } from '../../actions';
import SearchBox from '../../../../modules/GoogleWrapper/components/SearchBox/SearchBox';
import Map from '../../../../modules/Map/Map';

class NewTaskForm extends Component {
  state = {
    opened: false,
  };

  handleToggle = () => this.setState(state => ({ opened: !state.opened }));

  handleForm = (e) => {
    e.preventDefault();
    const { addTaskRequest } = this.props;
    const {
      title,
      date: { valueAsDate: date },
      time: { value: time },
      description,
      categories: { selectedOptions },
      place: { dataset: { geoJSON } },
    } = e.target;
    /* Handle date and time */
    const timeSplit = time.split(':');
    const newDate = moment(date);
    newDate.set({ h: timeSplit[0], m: timeSplit[1] });
    /* -------------------- */
    const place = JSON.parse(geoJSON);
    // Add description to geoJSON data for on map popup display
    place.properties.description = description.value;
    const task = {
      title: title.value,
      description: description.value,
      date: newDate.toDate(),
      categories: [...selectedOptions].map(option => option.value),
      place,
    };
    addTaskRequest(task);
  };

  render() {
    const { opened } = this.state;
    const { categories } = this.props;
    return (
      <Fragment>
        <button
          type="button"
          className={`${buttonStyles.open} ${styles.btn} ${opened ? styles.opened : styles.closed}`}
          onClick={this.handleToggle}
        >
          {opened ? '✗' : '+'}
        </button>
        {opened && (
          createPortal(
            <form className={styles.formContainer} onSubmit={this.handleForm}>
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
                rows="5"
              />
              {/* TODO Add input for custom categories  */}
              <select multiple className={bs['form-control']} name="categories" defaultValue={['categories']}>
                <option value="categories" disabled hidden>category</option>
                {categories.map(category => <option value={category}>{category}</option>)}
              </select>
              <div className={`${bs['input-group']}`}>
                <div className={`${bs['input-group-prepend']}`}>
                  <span className={`${bs['input-group-text']}`}>Set date</span>
                </div>
                <input type="date" className={bs['form-control']} name="date" defaultValue={moment().format('YYYY-MM-DD')} />
              </div>
              <div className={`${bs['input-group']}`}>
                <div className={`${bs['input-group-prepend']}`}>
                  <span className={`${bs['input-group-text']}`}>Set time</span>
                </div>
                <input type="time" className={bs['form-control']} name="time" defaultValue={moment().format('HH:mm')} />
              </div>
              <Map>
                <SearchBox />
              </Map>
              <div className={bs['input-group']}>
                <input className={`${bs.btn} ${bs['btn-danger']} ${bs['form-control']}`} placeholder="Reset" type="reset" />
                <button className={`${bs.btn} ${bs['btn-success']} ${bs['form-control']}`} type="submit">Add</button>
              </div>
            </form>,
            document.querySelector('#modal'),
          )
        )}
      </Fragment>
    );
  }
}

NewTaskForm.defaultProps = {
  addTaskRequest: () => null,
  categories: [],
};

NewTaskForm.propTypes = {
  addTaskRequest: PropTypes.func,
  categories: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = state => ({
  categories: state.taskManager.categories,
});

export default connect(mapStateToProps, { addTaskRequest })(NewTaskForm);
