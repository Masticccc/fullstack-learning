import { useState } from 'react';
import './App.css';

function App() {
  const [listNames, setListNames] = useState([]);
  const buttonClick = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];
    setListNames(names);
  };

  return (
    <div>
      <div className="container shadow">
        <h2>List of Names</h2>
        <button onClick={buttonClick} className="button">
          Print Names
        </button>
      </div>
      <ul className="list">
        {listNames.map((name, index) => (
          <li className="list-item shadow" key={index}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
