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

  // Play game
  play = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.updateGrid, this.speed);
  }

  // Pause game
  pause = () => {
    console.log('pause');
  }

  // Check each cell for neighbor status and update board
  updateGrid = () => {
    // Game board's current state
    let grid = this.state.grid;
    // Grid copy for position updates
    let gridCopy = this.state.grid.map(array => array.slice());

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        // Increase count if cell has a neighbor with value of true
        if (i > 0) if (grid[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (grid[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (grid[i][j + 1]) count++;
        if (j > 0) if (grid[i][j - 1]) count++;
        if (i < this.rows - 1) if (grid[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (grid[i + 1][j + 1]) count++;
        // If cell has fewer than two or more than three live neighbors, it dies (given false value)
        if (grid[i][j] && (count < 2 || count > 3)) gridCopy[i][j] = false;
        // If cell has exactly three live (true) neighbors, it becomes a live (true) cell
        if (!grid[i][j] && count === 3) gridCopy[i][j] = true;
      }
    }

    this.setState({
      grid: gridCopy,
      generation: this.state.generation + 1
    });
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
          play={this.play}
          pause={this.pause}
        />
      </div>
    );
  }
}

export default GameBoard;
