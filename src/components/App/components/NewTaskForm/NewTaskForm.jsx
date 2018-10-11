import bs from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ styles }) => {
  const generateOptions = (quantity) => {
    const output = [];
    for (let i = 0; i <= quantity; i++) { // eslint-disable-line
      output.push(<option key={i} value={i}>{i}</option>);
    }
    return output;
  };
  return (
    <form className={`${styles.container}`}>
      <input type="text" className={bs['form-control']} placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" />
      <div className={bs['input-group']}>
        <div className={`${bs['input-group-prepend']}`}>
          <input className={`${bs.btn} ${bs['btn-danger']}`} placeholder="Reset" type="reset" />
        </div>
        <select className={`${bs['custom-select']}`} defaultValue="Hours" aria-label="Example select with button addon">
          <option value="Hours" hidden disabled>Hours</option>
          {generateOptions(23)}
        </select>
        <select className={`${bs['custom-select']}`} defaultValue="Minutes" aria-label="Example select with button addon">
          <option value="Minutes" hidden disabled>Minutes</option>
          {generateOptions(59)}
        </select>
        <div className={`${bs['input-group-append']}`}>
          <button className={`${bs.btn} ${bs['btn-success']}`} type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

NewTaskForm.defaultProps = {
  styles: {},
};

NewTaskForm.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
};

export default NewTaskForm;
