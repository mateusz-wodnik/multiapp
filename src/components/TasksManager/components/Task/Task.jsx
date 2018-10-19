import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import bs from '../../../../styles/bootstrap.module.css';
import styles from './Task.module.sass';


class Task extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const {
      title,
      date,
      description,
      tags,
      categories,
      removeTask,
      _id,
    } = this.props;
    const { open } = this.state;
    return (
      <div className={`${styles.container} ${bs.card}`} onClick={this.handleOpen}>
        <header className={`${styles.header} ${bs['card-header']}`}>
          <h4 className={styles.title}>{title}</h4>
          <time className={`${styles.time} ${bs.badge} ${bs['badge-pill']} ${bs['badge-info']}`}>
            {moment(date).format('HH:mm')}
          </time>
          <ul className={styles.categories}>
            {categories.map(category => (
              <li className={`${bs.badge} ${bs['badge-info']} ${styles.category}`}>{category}</li>
            ))}
          </ul>
        </header>
        {/* Todo: content should be visible only on specific task page */}
        {open && (
          <Fragment>
            <div className={`${styles.content} ${bs['card-body']}`}>
              <p className={bs['card-text']}>{description}</p>
            </div>
            {!!tags.length && (
              <div className={bs['card-footer']}>
                <ul className={styles.tags}>
                  {tags.map(tag => (
                    <li className={`${bs.badge} ${bs['badge-info']} ${styles.tag}`}>
                      #
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Fragment>
        )}
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
  open: false,
  _id: '',
  removeTask: () => null,
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
  _id: PropTypes.string,
  removeTask: PropTypes.func,
};

export default Task;
