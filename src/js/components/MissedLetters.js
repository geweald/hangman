import React from 'react';

const MissedLetters = ({ letters }) => (
  <div className="MissedLetters">
    <div className="MissedLetters__title"><span>You missed:</span></div>
    <div className="MissedLetters__letters">
      {letters.map((letter, i) => <span className="letter" key={i}>{letter}</span>)}
    </div>
  </div>
);

export default MissedLetters;