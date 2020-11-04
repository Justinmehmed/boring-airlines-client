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
  console.log('Yes ive been clicked')
  event.preventDefault();
  this.setState({flightSelected: true})
  if(this.state.flightSelected === true) {
    console.log('Now i am true')
  } else {
    console.log('i am nothing')
  }
}



  render() {
    return(
      <div>

        <h4>Available Flights</h4>

        <form onSubmit={this._handleSubmit}>
          <div>
            <p><strong>1/1/13</strong> SYD > JFK 18:00 <button onClick={this._handleSubmit}>✓</button></p>
          </div>

          <div>
            <p><strong>3/1/13</strong> SYD > JFK 06:00 <button onClick={this._handleSubmit}>✓</button></p>
          </div>

          <div>
            <p><strong>5/1/13</strong> SYD > JFK 12:00 <button onClick={this._handleSubmit}>✓</button></p>
          </div>
        </form>
        {this.state.flightSelected && <Airline />}
      </div>
    )
  }

}

export default ListOfFlights;
