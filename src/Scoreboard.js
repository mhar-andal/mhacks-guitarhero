import React, { Component } from 'react';
import './Scoreboard.css'

class Scoreboard extends Component {
  constructor(props) {
    super(props)

    this.state = {score: 0}
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({score: this.state.score + 50})
  }



  render () {
    return (
      <div className="scoreboard">
        Score: {this.state.score}
        <button onClick={this.increment}></button>
      </div>
    )
  }
}

export default Scoreboard;
