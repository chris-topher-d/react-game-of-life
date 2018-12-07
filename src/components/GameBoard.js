import React, { Component } from 'react';
import Grid from './Grid';

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
    console.log(row, col);
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
      </div>
    );
  }
}

export default GameBoard;
