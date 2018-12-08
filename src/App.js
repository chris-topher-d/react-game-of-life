import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Game of Life</h1>
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
