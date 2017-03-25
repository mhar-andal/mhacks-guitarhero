import React, { Component } from 'react';
import './Fret.css'
import Scoreboard from './Scoreboard.js'


class Fret extends Component {
  render () {
    return (
      <div className="fret">
        <Scoreboard />
      </div>
    )
  }
}

export default Fret;
