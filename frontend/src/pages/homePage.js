import React, { Component } from 'react';
import Input from '../components/input/input.js';
import Button from '../components/button/button.js';
import Dropdown from '../components/dropdown/dropdown.js';

import PlayerBlock from '../components/playerBlock/playerBlock.js';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchItems,fetchLikes } from '../actions/ladderDataActions.js';
import  './homePage.css';

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            offsetFrom: 0,
            amount:1,
            league:"Synthesis",
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleOffsetFromChange = this.handleOffsetFromChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.fetch = this.fetch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLeagueChange = this.handleLeagueChange.bind(this);
        this.fetch()
        this.props.fetchLikes();
    }

    fetch()
    {
        this.props.fetchItems({
                offsetFrom : this.state.offsetFrom,
                count : this.state.amount,
                name : this.state.name,
                league : this.state.league,
            });
    }

    

    renderPlayerBlocks()
    {
        if(!this.props.ladder || this.props.ladder.length === 0){
            return (
                <h3>Error loading or empty result</h3>
            );
        }
        let playerBocks = this.props.ladder.map(
            row =>{
                return(
                    <PlayerBlock
                        level = {row.level}
                        name = {row.name}
                        spot = {row.rank}
                        class = {row.class}
                        mapkey = {row.rank}
                        likes = {this.props.likes}
                    />
                );
            }
        );

        return(playerBocks);
    }
  
    handleNameChange (event) {
        this.setState({
            name: event.target.value
        });

    }
    handleOffsetFromChange (event)  {
        this.setState({
            offsetFrom: event.target.value
        });
    }
    handleAmountChange (event) {
        this.setState({
            amount: event.target.value
        });
        console.log(this.state.amount);
    }
    handleLeagueChange (event) {
        this.setState({
            league: event.target.value
        });
        console.log(this.state.league);

    }
    handleSubmit(e)
    {
        e.preventDefault();        

        this.fetch();

        this.props.fetchLikes();
    }

    render() {
        return (
                <div className="column">
                    <h2>Path of Exile leaderboard</h2>
                    <form className ="top" onSubmit={this.handleSubmit}>
                        <div className="inputFields">
                            <Input
                                input={{
                                    name: "offsetFrom",
                                    placeholder: "Offest From",
                                    onChange: this.handleOffsetFromChange,
                                    type: "number",
                                }}
                                title={"offsetFrom"}
                            />
                        </div>
                        <div className="inputFields">
                            <Input
                                input={{
                                    name: "name",
                                    placeholder: "Name",
                                    onChange:  this.handleNameChange,
                                }}
                                title={"name"}
                            />
                        </div>
                        <div className="inputFields">
                            <Input
                                input={{
                                    name: "amount",
                                    placeholder: "Amount",
                                    type: "number",
                                    onChange:  this.handleAmountChange,
                                    
                                }}
                                title={"amount"}
                            />
                        </div>
                         <div className="inputFields">
                            <Button
                                value = {"Search"}
                            />
                        </div>
                        <div className="inputFields">
                        <Dropdown
                            dropdown ={{
                                name:"league",
                                id:"league",
                                title:"League",
                                onChange: this.handleLeagueChange

                            }}
                            options={["Synthesis","Standard"]}  
                        />
                        </div>

                    </form>
                    <div className="ladderContainer">
                        {this.renderPlayerBlocks()}
                    </div>
                </div>
        )
    }
}

export default connect(
    state => ({
        ladder: state.ladderReducer.ladder,
        error: state.ladderReducer.error,
        likes: state.ladderReducer.likes
    }),
    dispatch =>
        bindActionCreators(
            {
                fetchItems: fetchItems,
                fetchLikes: fetchLikes
            },
            dispatch
        )
)(HomePage);