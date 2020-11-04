import React, { Component } from 'react';
import Seat from './Seats';

class SeatDiagram extends Component {
  // const [] = useState
  constructor() {
    super();
    this.state = {
      seatCount: 0
    }
  }

  // Step 3. Makes individual seats. Amount it makes is based on seatAmount the function receives.

  makeSeats(seatAmount) {
    let seats = []

    for (let i = 0; i < seatAmount; i++) {
      // console.log(this.state.seatCount);
      seats.push(
        <Seat key={this.state.seatCount++} />
      );
    }
    return seats;
  }

  // Step 2. Makes a component/element with two wrapper divs, then calls a function makeSeats which created multiple Seat components equal to the seatAmount passed in.

  makeSeatRow(seatAmount) {
    return (
      <div className="seatmap">
      <div className="seating-row">
      {this.makeSeats(seatAmount)}
      </div>
      </div>
    );
  }

  // Basically calling makeSeatRow results in outputting this below:
  //   <Seat key={this.state.seatCount} />
  //   <Seat key={this.state.seatCount} />
  //   <Seat key={this.state.seatCount} />

  // Step 1. Start of seat logic. Since seatDiagram is the parent. Children render after.

  // TODO: Find a way to display row letter (A-F) to the left or right side of each row.
  // TODO: Find a way to display seatIds or numbers on each seat (1-3, 4-6, 7,9 etc)

  render() {
    return (
      <div>
      <div className="seating-row">
      <p className="row">A</p>  {this.makeSeatRow(3)}</div>
      <div className="seating-row">
      <p className="row">B</p>  {this.makeSeatRow(3)}</div>
      <div className="seating-row">
      <p className="row">C</p>  {this.makeSeatRow(3)}</div>
      <div className="seating-row">
      <p className="row">D</p>  {this.makeSeatRow(3)}</div>
      <div className="seating-row">
      <p className="row">E</p>  {this.makeSeatRow(3)}</div>
      <div className="seating-row">
      <p className="row">F</p>  {this.makeSeatRow(3)}</div>
      </div>
    );
  }
}

export default SeatDiagram;
