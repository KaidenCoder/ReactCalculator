import React, { useState } from 'react'
import './App.css';
import Button from './Button/Button';


function App() {

  const [value, setValue] = useState('');

  // gathers all the input digits
  const handleDigits = (val) => {
    setValue(value + val)
  }

  const evaluateDigits = () => {
    try {
      // evaluates the input digits
      setValue(eval(value))
    } catch (error) {
      // Alert the user when the user input format is wrong
      // Prevents the app from crashing
      alert(error.message);
    }
  }

  // Clear all the values input
  const clearDigits = () => {
    setValue("")
  }

  return (
    <div className="App">
      <div className="evaluated-result">
        <h2 className="result-height">{value}</h2>
      </div>
      <div className="digits">
        <Button valueClick={handleDigits}>7</Button>
        <Button valueClick={handleDigits}>8</Button>
        <Button valueClick={handleDigits}>9</Button>
        <Button valueClick={handleDigits}>/</Button>
      </div>
      <div className="digits">
        <Button valueClick={handleDigits}>4</Button>
        <Button valueClick={handleDigits}>5</Button>
        <Button valueClick={handleDigits}>6</Button>
        <Button valueClick={handleDigits}>*</Button>
      </div>
      <div className="digits">
        <Button valueClick={handleDigits}>1</Button>
        <Button valueClick={handleDigits}>2</Button>
        <Button valueClick={handleDigits}>3</Button>
        <Button valueClick={handleDigits}>+</Button>
      </div>
      <div className="digits">
        <Button valueClick={handleDigits}>.</Button>
        <Button valueClick={handleDigits}>0</Button>
        <Button valueClick={evaluateDigits}>=</Button>
        <Button valueClick={handleDigits}>-</Button>
      </div>
      <div className="digits">
        <button className="clear" onClick={clearDigits}>CLEAR</button>
      </div>
      <p className="credits">Made with ❤️ in ReactJs</p>
    </div>
  );
}

export default App;
