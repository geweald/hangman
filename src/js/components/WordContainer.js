import React from 'react';
import CharBox from './CharBox';

const WordContainer = ({ word }) => (
  <div className="WordContainer">
    {word.map((char, i) => <CharBox key={i} char={char} />)}
  </div>
);

export default WordContainer;