import React, { Component } from 'react';
import './playerBlock.css';
import '../../icons/icons.css';

class PlayerBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="playerContainer" key = {this.props.mapkey}>
            <div className={this.props.class}></div>
            <div className ="payerContainerTextContainer">
                <h3 className="textObject">
                    Name: {this.props.name}<br/>
                    Level: {this.props.level}<br/>
                    Rank: {this.props.spot}
                </h3>
            </div>

        </div>
        
      );
    }
  }
  
  export default PlayerBlock;