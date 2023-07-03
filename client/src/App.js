import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [disabled, setDisabled] = useState(false)
  const [ buttonColor, setButtonColor ] = useState('mediumvioletred');
  const newButtonColor = buttonColor === 'mediumvioletred' ? 'midnightblue' : 'mediumvioletred';
  const handleCheckBox = (e) => {
    setDisabled(e.target.checked);
  };
  return (
    <div>
      <button 
        id='button'
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)} 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
      >
        Change to {newButtonColor}
      </button>
      <input
        id='check-box'
        defaultChecked={disabled}
        onChange={(e) => handleCheckBox(e)}
        type='checkbox' />
      <label htmlFor='check-box'>Disable button</label>
    </div>
  );
}

export default App;
