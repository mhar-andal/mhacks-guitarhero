import React, { Component } from 'react';
import Fret from './Fret.js'
import Scoreboard from './Scoreboard.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Fret />
      </div>
    );
  }
}

export default App;
