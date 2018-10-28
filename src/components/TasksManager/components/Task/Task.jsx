import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './Task.module.sass';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import TopBar from './components/TopBar/TopBar';

class Task extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.dateRef = createRef();
    this.timeRef = createRef();
    this.descriptionRef = createRef();
    this.categoriesRef = createRef();
  }

  state = {
    open: false,
    editable: false,
    topbarToggle: false,
  };

  handleOpen = (e) => {
    if (e.target.localName !== 'header') return;
    this.setState(state => ({
      open: !state.open,
      topbarToggle: !state.topbarToggle,
    }));
  };

  handleEditable = () => {
    const { editable } = this.state;
    const { date, updateTaskRequest, _id, place } = this.props;
    if (editable) {
      const {
        titleRef: { current: { textContent: title } },
        timeRef: { current: { value: time } },
        descriptionRef: { current: { textContent: description } },
        categoriesRef: { current: { childNodes: allCategories } },
      } = this;
      /* Map categories 'ul' list for checked inputs */
      const categories = [];
      [...allCategories].forEach((li) => {
        const isChecked = li.children.category.checked;
        if (isChecked) categories.push(li.textContent);
      });
      /* ------------------------------------------- */
      /* Combine date and time inputs */
      const timeSplit = time.split(':');
      const newDate = moment(date);
      newDate.set({ h: timeSplit[0], m: timeSplit[1] });
      /* --------------------------- */
      const task = {
        title,
        description,
        date: newDate.toDate(),
        categories,
        place,
      };
      updateTaskRequest(_id, task);
    }
    this.setState(state => ({
      ...state,
      editable: !state.editable,
      topbarToggle: !editable,
      open: !editable,
    }));
  };

  handleTopbarToggle = () => {
    this.setState(state => ({ topbarToggle: !state.topbarToggle }));
  };

  render() {
    const {
      description,
      tags,
      removeTask,
      _id,
      allowEditing,
      ...headerProps
    } = this.props;
    const { open, editable, topbarToggle } = this.state;
    const {
      handleOpen,
      handleEditable,
      handleTopbarToggle,
      titleRef,
      dateRef,
      timeRef,
      descriptionRef,
      categoriesRef,
    } = this;
    return (
      <div className={`${styles.container} ${bs.card}`}>
        {allowEditing && (
          <TopBar {...{
            _id,
            removeTask,
            handleEditable,
            topbarToggle,
          }}
          />
        )}
        <Header
          {...{
            ...headerProps,
            titleRef,
            timeRef,
            categoriesRef,
            handleTopbarToggle,
            handleOpen,
            editable,
          }}
        />
        {open && <Body {...{ description, editable, descriptionRef }} /> }
        {open && !!tags.length && <Footer {...{ tags, editable }} />}
      </div>
    );
  }
}

Task.defaultProps = {
  date: '',
  description: '',
  tags: [],
  open: false,
  _id: '',
  removeTask: () => null,
  allowEditing: false,
};

Task.propTypes = {
  date: PropTypes.objectOf(PropTypes.any),
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  _id: PropTypes.string,
  removeTask: PropTypes.func,
  allowEditing: PropTypes.bool,
};

export default Task;
