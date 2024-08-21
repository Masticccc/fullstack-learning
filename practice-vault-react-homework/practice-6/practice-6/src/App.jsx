import React, { useState } from 'react';
import './App.css'; // Assuming you have the necessary CSS classes

function App() {
  // Array of rainbow colors
  const rainbowColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  // State to manage the body's current color, initially red
  const [bodyColor, setBodyColor] = useState('red');

  // Function to get the next color in the rainbow array, getnextColor define the next color base on the current one, loop back to red after end of array
  const getNextColor = (currentColor) => {
    const currentIndex = rainbowColors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % rainbowColors.length;
    return rainbowColors[nextIndex];
  };

  // Event handler for button click, get the next color base on getNextColor function
  const handleColorChange = () => {
    const nextColor = getNextColor(bodyColor);
    setBodyColor(nextColor);
  };

  // Div color is the current color base on bodyColor, span background color indicate the next color it will change to
  return (
    <div className={`container ${bodyColor}`}>
      <button className="button" onClick={handleColorChange}>
        To{' '}
        <span className={getNextColor(bodyColor)}>
          {getNextColor(bodyColor)}
        </span>
      </button>
    </div>
  );
}

export default App;
