import React, { Component } from 'react';
import Grid from './Grid';
import Controls from './Controls';

class GameBoard extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 50;
    this.speed = 150;
    this.state = {
      grid: Array(this.rows).fill(Array(this.cols).fill(false)),
      generation: 0
    }
  }

  componentDidMount() {
    this.seed();
  }

  // Changes state of cell to true or false when clicked
  boxClick = (row, col) => {
    let gridCopy = this.state.grid.map(array => array.slice());
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({grid: gridCopy});
  }

  // Generate random live cells
  seed = () => {
    let gridCopy = this.state.grid.map(array => array.slice());
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        // Set approx 20% of random cells to true
        if (Math.floor(Math.random() * 5) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }

    this.setState({grid: gridCopy});
  }

  render() {
    return (
      <div id='game-board'>
        <Grid
          grid={this.state.grid}
          rows={this.rows}
          cols={this.cols}
          boxClick={this.boxClick}
        />
        <Controls
          seed={this.seed}
        />
      </div>
    );
  }
}

export default GameBoard;
