import React, { Component } from 'react';

import PlaneDiagram from './PlaneDiagram';
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
      <PlaneDiagram />
      <ReserveSeat />
      <Seats />
      </div>
    )
  }
}

export default Flight;
