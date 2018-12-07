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

  boxClick = (row, col) => {
    let gridCopy = this.state.grid.map(array => array.slice());
    gridCopy[row][col] = !gridCopy[row][col];
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
        <Controls />
      </div>
    );
  }
}

export default GameBoard;
