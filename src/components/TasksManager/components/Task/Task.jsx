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
    console.log(e.target)
    if (e.target.localName !== 'header') return;
    this.setState(state => ({
      open: !state.open,
      topbarToggle: !state.topbarToggle,
    }));
  };

  handleEditable = () => {
    const { editable } = this.state;
    const { date, updateTaskRequest, _id } = this.props;
    if (editable) {
      const {
        titleRef: { current: { textContent: title } },
        timeRef: { current: { value: time } },
        descriptionRef: { current: { textContent: description } },
        categoriesRef: { current: { childNodes: rawCategories } },
      } = this;
      console.log(title);
      console.log(time);
      console.log(description);
      const categories = [];
      [...rawCategories].forEach(li => {
        const isChecked = li.children.category.checked;
        if (isChecked) categories.push(li.textContent);
      });
      console.log(categories)
      // console.log(categories.map())
      // this.forceUpdate();
      // const { addTaskRequest } = this.props;
      const newDate = moment(date);
      newDate.set({ h: 11, m: 11 });
      const task = {
        title,
        description,
        date: newDate.toDate(),
        categories,
      };
      updateTaskRequest(_id, task);
    }
    // setTimeout(() => {
    this.setState(state => ({
      ...state,
      editable: !state.editable,
      topbarToggle: editable ? false : true,
      open: editable ? false : true,
    }));
    // }, 1)
  };

  handleTopbarToggle = () => {
    this.setState(state => ({ topbarToggle: !state.topbarToggle }));
  };

  render() {
    const {
      title,
      date,
      description,
      tags,
      categories,
      allCategories,
      removeTask,
      _id,
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
      <div id={_id} className={`${styles.container} ${bs.card}`}>
        <TopBar {...{ _id, removeTask, handleEditable, topbarToggle }} />
        <Header
          {...{
            title,
            date,
            categories,
            editable,
            allCategories,
            _id,
            handleTopbarToggle,
            handleOpen,
            titleRef,
            timeRef,
            categoriesRef,
          }}
        />
        {open && <Body {...{ description, editable, descriptionRef }} /> }
        {open && !!tags.length && <Footer {...{ tags, editable }} />}
      </div>
    );
  }
}

Task.defaultProps = {
  title: '',
  date: '',
  description: '',
  tags: [],
  categories: [],
  allCategories: [],
  open: false,
  _id: '',
  removeTask: () => null,
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.objectOf(PropTypes.any),
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
  allCategories: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  _id: PropTypes.string,
  removeTask: PropTypes.func,
};

export default Task;
