import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import './sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <p id='title'>Game of Life</p>
        </header>
        <GameBoard />
      </div>
    );
  }
}

export default App;
