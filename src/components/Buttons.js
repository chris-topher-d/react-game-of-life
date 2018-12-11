import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div id='buttons'>
        <button onClick={this.props.seed}>Seed Game</button>
        <button onClick={this.props.play}>Play</button>
        <button onClick={this.props.pause}>Pause</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Buttons;
