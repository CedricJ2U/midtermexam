import React, { useState } from 'react';
import './App.css';

const items = [
  'Being On Time',
  'Making An Effort',
  'Being High Energy',
  'Having A Positive Attitude',
  'Being Passionate',
  'Using Good Body Language',
  'Being Coachable',
  'Doing A Little Extra',
  'Being Prepared',
  'Having A Strong Work Ethic'
];

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');

  const handleKeyPress = (key) => {
    if (key === 'RESET') {
      setDisplay('10 Things That Require Zero Talent');
    } else if (key === 'NAME') {
      setDisplay('CEDRIC JAMES LUMAWIG'.toUpperCase()); 
    } else {
      const index = parseInt(key, 10);
      if (!isNaN(index) && index >= 0 && index < items.length) {
        setDisplay(`${index + 1} - ${items[index]}`);
      }
    }
  };

  return (
    <div className="App">
      <h1>CEDRIC JAMES LUMAWIG - IT3A</h1> 
      <h2>{display}</h2>
      <div>
        <button onClick={() => handleKeyPress('0')}>0</button>
        <button onClick={() => handleKeyPress('1')}>1</button>
        <button onClick={() => handleKeyPress('2')}>2</button>
        <button onClick={() => handleKeyPress('3')}>3</button>
        <button onClick={() => handleKeyPress('4')}>4</button>
        <button onClick={() => handleKeyPress('5')}>5</button>
        <button onClick={() => handleKeyPress('6')}>6</button>
        <button onClick={() => handleKeyPress('7')}>7</button>
        <button onClick={() => handleKeyPress('8')}>8</button>
        <button onClick={() => handleKeyPress('9')}>9</button>
        <button onClick={() => handleKeyPress('RESET')}>RESET</button>
        <button onClick={() => handleKeyPress('NAME')}>NAME</button>
      </div>
    </div>
  );
}

export default App;
