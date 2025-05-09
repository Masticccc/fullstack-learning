import { useState } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black'];

function App() {
  const [currentColor, setCurrentColor] = useState('white');

  const onButtonClick = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className={`container ${currentColor}`}>
      <div className="button-row">
        {colors.map((color) => (
          <button
            key={color}
            className={`button ${color}`}
            onClick={() => onButtonClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <h2 className="heading">Current color is: "{currentColor}"</h2>
    </div>
  );
}

export default App;
