import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div id='controls'>
        <div id='buttons'>
          <button onClick={this.props.seed}>Seed Game</button>
          <button>Play</button>
        </div>
      </div>
    );
  }
}

export default Controls;
