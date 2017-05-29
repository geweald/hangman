import React, { Component } from 'react';
import FolkContainer from './FolkContainer';
import MissedLetters from './MissedLetters';
import WordContainer from './WordContainer';
import GameOver from './GameOver';


const RANDOM_WORD_API_URL = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=7&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';


export default class App extends Component {
  state = { 
    word: '',
    hitLetters: [],
    missedLetters: [],
    gameOver: false,
    stage: 0
  }
  
  componentWillMount() {
    this._getWord();
  }

  componentDidMount() {
    window.addEventListener("keydown", this._onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this._onKeyDown);
  }

  _getWord = () => {
    fetch(RANDOM_WORD_API_URL)
      .then(res => res.json())
      .then(json => this.setState({ 
        word: json.word.toUpperCase(),
        hitLetters: [],
        missedLetters: [],
        gameOver: false,
        stage: 0
      }))
      .catch(err => console.error("API error", err));
  }

  _onKeyDown = (e) => {
    const char = e.key.toUpperCase();
    const { word, hitLetters, missedLetters, stage, gameOver } = this.state;
    const letters = /^[A-Z|-]$/;
    
    if (!char.match(letters) || gameOver) return;


    if (word.includes(char) && !hitLetters.includes(char)) {
      this.setState({ 
        hitLetters: [...hitLetters, char] 
      }, () => {
        if (this._checkWin()) {
          this.setState({ gameOver: true });
        }
      });
    } else if (!word.includes(char) && !missedLetters.includes(char)) {
      this.setState({ 
        missedLetters: [...missedLetters, char], 
        stage: stage + 1 
      }, () => {
        if (this._checkLose()) {
          this.setState({ gameOver: true });
        }
      });
    }
  }

  _checkWin = () => {
    const {word, hitLetters } = this.state;
    let won = true;
    
    word.split('').forEach(char => {
      if (!hitLetters.includes(char)) won = false;
    });
    return won;
  }

  _checkLose = () => {
    return (this.state.stage >= 11);
  }

  render() {
    const { missedLetters, hitLetters, word, stage, gameOver } = this.state;
    const wordToShow = word.split('').map(char => hitLetters.includes(char) ? char : ' ');

    return (
      <div className="App">
        <div className="App__game">
          <div className="App__square"></div>
        
          <div className="App__top-row">
            <FolkContainer stage={stage} />
            <MissedLetters letters={missedLetters} />
          </div>

          <WordContainer word={wordToShow} />
        </div>
        
        {gameOver && (
          <GameOver 
            message={this._checkWin() ? "Well done!" : "Game Over"} 
            buttonClick={this._getWord} 
          />
        )}
      </div>
    );
  }
}
