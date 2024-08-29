import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const onAddClick = () => {
    const newItem = items.length + 1;
    setItems([...items, newItem]);
  };
  const onRemoveClick = () => {
    const newItems = items.slice(0, -1);

    setItems(newItems);
  };
  const [layoutStatus, setlayoutStatus] = useState(false); //Set up layout button status, either show or hidden
  const buttonClick = () => {
    setlayoutStatus(!layoutStatus);
  }; // Event handler for button click

  return (
    <div className="container">
      <h2>Manage List Items</h2>
      <button onClick={onAddClick}>Insert new item</button>
      <button className="danger" onClick={onRemoveClick}>
        Remove last item
      </button>
      <button
        onClick={buttonClick}
        class="warning"
        data-component="change-layout"
      >
        {layoutStatus
          ? 'Change to "Vertical" layout'
          : 'Change to "Horizontal" layout'}
      </button>
      <ul
        className={`list ${
          layoutStatus ? 'horizontal-layout' : 'vertical-layout'
        }`}
      >
        {items.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
