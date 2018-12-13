import React, { Component } from 'react';

class Sliders extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: '40 X 24',
      speed: 50,
      gridSizeSlider: 50
    }
  }

  // Changes game speed when slider is moved
  updateSpeed = sliderPosition => {
    this.props.changeSpeed(sliderPosition);
    this.setState({speed: sliderPosition});
  }

  // Changes grid size when slider is moved
  changeGridSize = (sliderPosition) => {
    let x = 0, y = 0, boxSize = 0;

    if (sliderPosition < 34) {
      // Set grid size to 25 X 15 with 21 X 21 px squares
      x = 25;
      y = 15;
      boxSize = 21;
    } else if (sliderPosition > 33 && sliderPosition < 67) {
      // Set grid size to 40 X 24 with 13.5 X 13.5 px squares
      x = 40;
      y = 24;
      boxSize = 13.5;
    } else if (sliderPosition > 66) {
      // Set grid size to 50 X 30 with 11 X 11 px squares
      x = 50;
      y = 30;
      boxSize = 11;
    }

    this.props.setBoardSize(x, y, boxSize);

    this.setState({
      gridSize: `${x} X ${y}`,
      gridSizeSlider: sliderPosition
    });
  }

  render() {
    return (
      <div id='sliders'>
        <div className='slider-container'>
          <p className='slider-header'>Speed: {this.state.speed}</p>
          <input
            className='speed slider'
            list='tickmarks'
            max={100}
            onChange={e => this.updateSpeed(e.target.value)}
            step={1}
            type='range'
            value={this.state.speed}
          />
        </div>
        <div className='slider-container'>
          <p className='slider-header'>Grid Size: {this.state.gridSize}</p>
          <input
            className='size slider'
            list='tickmarks'
            max={100}
            onChange={e => this.changeGridSize(e.target.value)}
            step={1}
            type='range'
            value={this.state.gridSizeSlider}
          />
        </div>
      </div>
    );
  }
}

export default Sliders;
