import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Game of Life</h2>
        <GameBoard />
      </div>
    );
  }
}

export default App;
