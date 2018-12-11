import React, { Component } from 'react';

class Sliders extends Component {
  render() {
    return (
      <div id='sliders'>
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

export default Sliders;
