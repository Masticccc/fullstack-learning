import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the input text initially blank
  const [inputText, setInputText] = useState('');

  // State to manage the output text (uppercase) initially blank
  const [outputText, setOutputText] = useState('');

  // Function to handle the button click and convert text to uppercase
  const onClick = () => {
    setOutputText(inputText.toUpperCase());
  };

  return (
    <div className="container">
      <h2>Convert Text to Uppercase</h2>

      {/* Input field for text, updates state on change */}
      <div>
        <input
          type="text"
          id="textInput"
          placeholder="Enter text here" /* Holder "Enter text here" in the field */
          value={inputText} /* Tied the value to {inputText} */
          onChange={(e) =>
            setInputText(e.target.value)
          } /* Change the value when typing */
        />
      </div>

      {/* Button to trigger the text conversion */}
      <div>
        <button onClick={onClick}>Convert to uppercase</button>
      </div>

      {/* Output div to display the converted uppercase text */}
      <div id="output">{outputText}</div>
    </div>
  );
}

export default App;
