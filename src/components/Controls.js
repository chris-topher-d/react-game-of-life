import React, { Component } from 'react';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      value: 50
    }
  }

  onUpdate = e => {
    this.setState({value: e.target.value});
  }

  render() {
    // let sliderWidth = this.props.speedPosition + 'px';
    return (
      <div id='controls'>
        <div id='buttons'>
          <button onClick={this.props.seed}>Seed Game</button>
          <button onClick={this.props.play}>Play</button>
          <button onClick={this.props.pause}>Pause</button>
          <button onClick={this.props.reset}>Reset</button>
        </div>

        <div id='speed-slider'>
          <p className='slider-header'>Speed: {this.state.value}</p>
          <input
            className='input-range'
            list='tickmarks'
            max={100}
            onChange={e => this.onUpdate(e)}
            step={1}
            type='range'
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default Controls;
