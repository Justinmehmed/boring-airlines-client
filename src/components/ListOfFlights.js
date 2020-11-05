import React, {Component} from 'react'

import Airline from './Airline'

class ListOfFlights extends Component {

constructor() {
  super();
  this.state = {
    flightSelected: false
  }
  this._handleSubmit = this._handleSubmit.bind(this)
}

_handleSubmit(event) {
  this.setState({flightSelected: false})
  console.log('Yes ive been clicked')
  event.preventDefault();
  this.setState({flightSelected: true})
}

  render() {
    return(
      <div id="listOfFlightsComponent">

        <h4>Available Flights</h4>

        <form onSubmit={this._handleSubmit}>
          <div>
            <p><strong>1/1/13</strong> SYD > JFK 18:00 <button className="tick-button" onClick={this._handleSubmit}>✓</button></p>
          </div>

        </form>
        {this.state.flightSelected && <Airline /> }
      </div>
    )
  }

}

export default ListOfFlights;
