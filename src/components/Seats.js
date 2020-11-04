
import React, { Component } from 'react';
import PlaneDiagram from './PlaneDiagram';
import ReserveSeat from './ReserveSeat';

function Square(props) {
  return (
    <button className="square"
    onClick={props.onClick}>
    {props.value}
    </button>
  );
}

export default Square;
