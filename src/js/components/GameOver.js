import React, { Component } from 'react';

class GameOver extends Component {
  render() {
    const { message = "Game Over", buttonClick } = this.props;

    return (
      <div className="GameOver">
        <div className="GameOver__message">{message}</div>
        <div className="GameOver__button" onClick={buttonClick}>New Word</div>
      </div>
    );
  }
}

export default GameOver;