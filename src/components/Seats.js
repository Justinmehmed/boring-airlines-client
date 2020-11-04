import React, { Component } from 'react';


// step 4. Create seat. Setting up the seat component

class Seat extends Component{
  constructor() {
    super();
    this.state = {
      isReserved: false // setting the default that a seat is not reserved
    }
    this._handleClick.bind(this); // this in this class = _handleClick event listener.
  }

  _handleClick (e) {
    console.log('handling click on seat.')
    this.setState({
      isReserved: !this.state.isReserved
    });
    // !this.state.value
    // if (this.state.isReserved is true) {
    //   state should now equal false
    // }
    // else if (this.state.isReserved is false) {
    //   state should now equal true
    // }
  }

  // Order of events
  // 1. User clicks on seats
  // 2. handleClick switches the state to opposite of its current value
  // 3. react reloads/create seat using the new state thats been set by the handleClick function. Uses that state for the if statement in the render() function.


  // step 5. Creating the seat component html
  // when the seats 'isReserved' state is true. i.e. it is reserved, therefor unavailable - disable click.
  // when the seat 'isReserved' is false. i.e. it's available.
  render() {
    if (this.state.isReserved) {
      return (
        <div>
        <button
        className="seats seats---unavailable"
        onClick={ this._handleClick.bind(this)}
        disabled={this.state.isReserved}>
        </button>
        </div>
      )
    } else {
      return (
        <div>
        <button className="seats"
        onClick={ this._handleClick.bind(this)  }>
        </button>
        </div>
      );
    }
  }
}

export default Seat;
