import React, { Component } from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  'Sydney', 'Melbourne', 'Adelaide', 'Perth'
]

// const fromSydney = [
//   'Melbourne', 'Adelaide', 'Perth'
// ];
//
// const fromMelbourne = [
//   'Sydney', 'Adelaide', 'Perth'
// ];
//
// const fromAdelaide = [
//   'Sydney', 'Melbourne', 'Perth'
// ];

class ToAndFrom extends Component {

constructor() {
  super()
  this.state = {
    to: '',
    from: ''
  }
  this._handleSubmit = this._handleSubmit.bind(this);
}

_handleSubmit(event) {
  event.preventDefault();
  this.setState({ to: '', from: '' })
}

  render() {
    return(
      <div id="ToAndFromContainer">
        <form onSubmit={ this._handleSubmit }>

          <div id="dropDown">
            <Dropdown options={options} onChange={this._onSelect} value={this.state.to}/>
          </div>

          <div id="dropDown">
            <Dropdown options={options} onChange={this._onSelect} value={this.state.from}/>
          </div>

          <button type="submit" id="ToAndFromSubmit">Check for flights</button>

        </form>
      </div>
    )
  }
}

export default ToAndFrom;
