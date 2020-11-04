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
<<<<<<< HEAD
      <SeatDiagram />
=======
      <h3>Select a seat:</h3>
      <PlaneDiagram />
>>>>>>> 658af1dbc1d5f002ec0faf40f43207a2862a2fca
      <ReserveSeat />
      <Seats />
      </div>
    );
  }
}

export default Flight;
