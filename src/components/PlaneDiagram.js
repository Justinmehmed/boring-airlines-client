import React, { Component } from 'react';
import Square from './Seats';

class PlaneDiagram extends Component {
  render() {
    return (
      <div className="seatmap">
      <div className="seating-row">
      {Square(0)}
      {Square(1)}
      {Square(2)}
      </div>
      <div className="seating-row">
      {Square(3)}
      {Square(4)}
      {Square(5)}
      </div>
      <div className="seating-row">
      {Square(6)}
      {Square(7)}
      {Square(8)}
      </div>

      <div className="seating-row">
      {Square(0)}
      {Square(1)}
      {Square(2)}
      </div>
      <div className="seating-row">
      {Square(3)}
      {Square(4)}
      {Square(5)}
      </div>
      <div className="seating-row">
      {Square(6)}
      {Square(7)}
      {Square(8)}
      </div>
      </div>
    );
  }
}



export default PlaneDiagram;
