import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the box's background color, size, and visibility, initially default (false)
  const [isRed, setIsRed] = useState(false);
  const [isLarger, setIsLarger] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Function to handle background color change
  const handleBgButtonClick = () => {
    setIsRed(!isRed);
  };

  // Function to handle size change
  const handleSizeButtonClick = () => {
    setIsLarger(!isLarger);
  };

  // Function to handle visibility change
  const handleVisibilityButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="container">
      {/* Button to change background color */}
      <button
        className="button"
        data-action="background"
        onClick={handleBgButtonClick}
      >
        {isRed
          ? 'Change the box background to default color'
          : 'Change the box background to "red"'}
      </button>

      {/* Button to change size */}
      <button
        className="button warning"
        data-action="size"
        onClick={handleSizeButtonClick}
      >
        {isLarger
          ? 'Make the box goes back to its default size'
          : 'Make the box becomes bigger'}
      </button>

      {/* Button to change visibility */}
      <button
        className="button danger"
        data-action="visibility"
        onClick={handleVisibilityButtonClick}
      >
        {isHidden ? 'Show the box' : 'Hide the box'}
      </button>

      {/* Box element with dynamic classes based on state */}
      <div
        className={`box ${isRed ? 'red' : ''} ${isLarger ? 'larger' : ''} ${
          isHidden ? 'hidden' : ''
        }`}
      ></div>
    </div>
  );
}

export default App;
