import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(''); // useState manage the state of the input field value, initially empty

  const onClick = () => {
    setInputValue('A button is clicked'); // when button clicked, change input value to the message 'A button is clicked'
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={inputValue} // value field is depends on inputvalue state, which initially is blank
        onChange={(e) => setInputValue(e.target.value)} // onChange event to update input when typing anything in the input field
      />
      <button className="button" onClick={onClick}>
        Click me to change the input value
      </button>
    </div> // button setup
  );
}

export default App;
