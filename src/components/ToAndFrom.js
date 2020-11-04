import React, { Component } from 'react';

<<<<<<< HEAD
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Sydney', 'Melbourne', 'Adelaide', 'Perth'
]

class ToAndFrom extends Component {
  // function for value

  constructor() {
    super()
    this.state = {
      to: '',
      from: '',
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
=======
import ListOfFlights from './ListOfFlights'

class ToAndFrom extends Component {

constructor() {
    super();
    this.state = {
      isSubmitted: false
    }

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('Button submitted!');
    this.setState({isSubmitted: true})
    // this.props.onSubmit( this.state.query ); - this line is to pass this.state.query into props, not used until called in parent component
  }
  render () {
    return (
      <div id="searchComponent">
        <form onSubmit={this._handleSubmit} className="ToAndFromSubmit">
          <input type="search" placeholder="destination"/>
          <input type="submit" value="search"/>
        </form>
        {this.state.isSubmitted && <ListOfFlights />}
>>>>>>> 658af1dbc1d5f002ec0faf40f43207a2862a2fca
      </div>
    )
  }
  }

export default ToAndFrom;
