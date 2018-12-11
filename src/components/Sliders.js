import React, { Component } from 'react';

class Sliders extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: '50 X 30',
      speed: 75,
      gridSizeSlider: 50
    }
  }

  // Changes game speed when slider is moved
  updateSpeed = sliderPosition => {
    console.log(sliderPosition);
    this.props.changeSpeed(sliderPosition);
    this.setState({speed: sliderPosition});
  }

  // Changes grid size when slider is moved
  changeGridSize = (sliderPosition) => {
    // let gridSize = '';
    let x = 0, y = 0;

    // if (sliderPosition < 34) gridSize = '20 X 10';
    // if (sliderPosition > 33 && sliderPosition < 67) gridSize = '50 X 30';
    // if (sliderPosition > 66) gridSize = '70 X 50';
    if (sliderPosition < 34) {
      x = 20;
      y = 10;
    } else if (sliderPosition > 33 && sliderPosition < 67) {
      x = 50;
      y = 30;
    } else if (sliderPosition > 66) {
      x = 70;
      y = 50;
    }

    this.props.setBoardSize(x, y);

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
