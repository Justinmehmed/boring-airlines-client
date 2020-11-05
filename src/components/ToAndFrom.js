import React, { Component } from 'react';

import ListOfFlights from './ListOfFlights'

class ToAndFrom extends Component {

constructor() {
    super();
    this.state = {
      isSubmitted: false
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleSubmit(event) {
    event.preventDefault();
    console.log('Button submitted!');
    this.setState({isSubmitted: true})
    // this.props.onSubmit( this.state.query ); - this line is to pass this.state.query into props, not used until called in parent component
  }
  render () {
    return (
      <div id="searchComponent">
        <div className="searchDiv">
          <form onSubmit={this._handleSubmit} className="ToAndFromSubmit">
            <input type="search" placeholder="destination"/>
            <input id="searchButtonTo" type="submit" value="search"/>
          </form>
        </div>
        {this.state.isSubmitted && <ListOfFlights />}
      </div>
    )
  }
  }
export default ToAndFrom;
