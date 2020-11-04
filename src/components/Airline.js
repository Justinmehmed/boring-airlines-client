import React, { Component } from 'react';

import SeatDiagram from './SeatDiagram';
import ReserveSeat from './ReserveSeat';
import Seats from './Seats';


class Flight extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div id="border-outline">
      <SeatDiagram />
      <ReserveSeat />
      <Seats />
      </div>
    );
  }
}

export default Flight;
