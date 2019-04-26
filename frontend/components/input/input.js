import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: !!this.props.checkboxChecked
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({isChecked: !(this.state.isChecked)})
    }

    render() {
        return (
            <div>
                 <input
                        { ...this.props.input }
                        
                    />
            </div>
        )
    }
}

Input.propTypes = {
    errorList: PropTypes.object,
    title: PropTypes.string,
    checkbox: PropTypes.bool,
    tooltipText: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    minLength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    maxLength: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    min: PropTypes.string,
    max: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    checkboxDisabled: PropTypes.bool,
    checkboxChecked: PropTypes.bool,
    onClickIcon: PropTypes.func
};