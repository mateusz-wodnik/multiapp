import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.module.sass';

class Switch extends Component {
  state = {
    checked: false,
  };

  handleClick = () => {
    const { onClick } = this.props;
    this.setState(state => ({ checked: !state.checked }));
    onClick();
  };

  render() {
    const { container } = this.props;
    const { checked } = this.state;
    return (
      <button
        type="button"
        className={`${styles.container} ${container}`}
        onClick={this.handleClick}
      >
        <span className={`${styles.point} ${checked ? styles.checked : ''}`} />
      </button>
    );
  }
}

Switch.defaultProps = {
  container: '',
  onClick: () => null,
};

Switch.propTypes = {
  container: PropTypes.string,
  onClick: PropTypes.func,
};

export default Switch;
