import { useState } from 'react';
import './App.css';

function App() {
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software engineer',
  }; // Set up person definition
  const [detailStatus, setDetailStatus] = useState(false); //Set up card status, either show or hidden
  const buttonClick = () => {
    setDetailStatus(!detailStatus);
  }; // Event handler for button click

  return (
    <div className="card">
      <h2 className="card-title">Person Details</h2>
      <div className="card-body">
        {detailStatus ? (
          <div>
            <p>
              <span className="label">Name:</span> {person.firstName}{' '}
              {person.lastName}
            </p>
            <p>
              <span className="label">Age:</span> {person.age}
            </p>
            <p>
              <span className="label">Occupation:</span> {person.occupation}
            </p>
          </div>
        ) : (
          'Content hidden'
        )}
      </div>
      <div class="card-footer">
        {' '}
        <button onClick={buttonClick}>
          {detailStatus ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  ); // Initial useState is false: content hidden, and button is "Show details", useState is true: content shown with label and info as above, button is "Hide Details"
}

export default App;
