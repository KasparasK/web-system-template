import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './button.css';

class Button extends Component {
  render() {
    return (
      <button 
        onClick = {this.props.onClick}
        onSubmit = { this.props.onSubmit}
        disabled = {this.props.isDisabled}
        type={this.props.setType}
        className={"button"}

      >
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
    styleName: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    isDisabled: PropTypes.bool, 
    value: PropTypes.string,
    
}

export default Button;
