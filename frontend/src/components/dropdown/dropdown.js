
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    constructor(props) {
        super(props);
      }

    renderOptions(options){
        const renderedOptions = Array(options.length);

        for(let value of options){
            renderedOptions.push(
                <option 
                    value={value} 
                    key={value}
                > 
                    {value}
                </option>
            )
        }
        return renderedOptions;
    }

    render() {
    return (

        <select 
            { ...this.props.dropdown }
        >
            {this.renderOptions(this.props.options)}
        </select>
    );
  }
}


export default Dropdown;
