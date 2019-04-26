import React, { Component } from 'react';
import './playerBlock.css';
import '../../icons/icons.css';
import '../button/button.js'
import Button from '../button/button.js';

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { postLikes } from '../../actions/ladderDataActions.js';

class PlayerBlock extends Component {
    constructor(props) {
        super(props);
        this.handleLikeClick = this.handleLikeClick.bind(this);

    }

    handleLikeClick()
    {
        this.props.postLikes({
          charName : this.props.name,
        });
    }

    render() {
      return (
        <div className="playerContainer" key = {this.props.mapkey}>
            <div className={this.props.class}></div>
            <div className ="payerContainerTextContainer">
                <h3 className="textObject">
                    Name: {this.props.name}<br/>
                    Level: {this.props.level}<br/>
                    Rank: {this.props.spot}<br/>
                    Likes: {this.props.likes[0] === undefined? "":(this.props.likes[0].charName === this.props.name?this.props.likes[0].likeCount:"" ) }
                </h3>
                <Button
                  value = {"Like"}
                  onClick = {this.handleLikeClick}
                />
            </div>

        </div>
        
      );
    }
  }
  
  export default connect(
    state => ({
        likes: state.ladderReducer.likes

    }),
    dispatch =>
        bindActionCreators(
            {
              postLikes: postLikes
            },
            dispatch
        )
)(PlayerBlock);