import React, { Component } from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const options = [
  'Sydney', 'Melbourne', 'Adelaide', 'Perth'
]

const fromSydney = [
  'Melbourne', 'Adelaide', 'Perth'
];

const fromMelbourne = [
  'Sydney', 'Adelaide', 'Perth'
];

const fromAdelaide = [
  'Sydney', 'Melbourne', 'Perth'
];

class ToAndFrom extends Component {


  render() {
    return(
      <div id="ToAndFromContainer">
        <div id="dropDown">
        <Dropdown options={options} onChange={this._onSelect} value="To"
         />
        </div>
        <div id="dropDown">
        <Dropdown options={options} onChange={this._onSelect} value="From"
         />
        </div>
        <button id="ToAndFromSubmit">Check for flights</button>
      </div>
    )
  }
}

export default ToAndFrom;
