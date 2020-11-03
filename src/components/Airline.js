import React, { Component } from 'react';


class Flight extends Component {
  render() {
    return(
      <div id="border-outline">
        <h3>Flight Information</h3>
          <strong>Component that renders onClick()?. (Available Flights for that destination like in example?)</strong>
          <div>
          <h2>Yes or no?</h2>
            <ul>
              <li>17:00 Flight to New York 02/01/2021 A380</li>
              <li>18:00 Flight to New York 02/01/2021 A728</li>
              <li>06:00 Flight to New York 03/01/2021 A404</li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Flight;
