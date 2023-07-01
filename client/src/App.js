import React, { useState } from 'react';
import './App.css';

function App() {
  const [disabled, setDisabled] = useState(false)
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const handleCheckBox = (e) => {
    setDisabled(e.target.checked);
  };
  return (
    <div>
      <button 
        id='button'
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)} 
        style={{backgroundColor: buttonColor}}
      >
        Change to {newButtonColor}
      </button>
      <input
        id='check-box-label'
        defaultChecked={disabled}
        onChange={(e) => handleCheckBox(e)}
        type='checkbox' />
    </div>
  );
}

export default App;
