import React, { Component } from 'react'

class ToAndFrom extends Component {
  render() {
    return(
      <div id="ToAndFrom">
      <h3>This is the to and from like in the example (We should just use 3 random dummy data sets like in their example as an MVP)</h3>
        <form>
          <input placeholder="To"></input>
          <input placeholder="From"></input>
        </form>
      </div>
    );
  }
}

export default ToAndFrom;
