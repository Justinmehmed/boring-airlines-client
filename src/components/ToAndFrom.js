import React, { Component } from 'react';

import axios from 'axios';

import ListOfFlights from './ListOfFlights'


const SERVER_URL = 'http://localhost:3000/flights/1.json'

class ToAndFrom extends Component {

constructor() {
    super();
    this.state = {
      isSubmitted: false,
      data: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this)

    const getData = () => {
          axios.get(SERVER_URL).then((results) => {
            this.setState({data: results.data})
            console.log(results.data)
          })
        };
        getData();
      }

  _handleSubmit(event) {
    event.preventDefault();
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
