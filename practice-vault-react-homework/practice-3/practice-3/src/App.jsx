import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the first name input field, intially blank
  const [firstName, setFirstName] = useState('');

  // State to manage the last name input field intially blank
  const [lastName, setLastName] = useState('');

  // State to store and display the full name intially blank
  const [fullName, setFullName] = useState('');

  // Function to handle button click and set the full name
  const onClick = () => {
    setFullName(`Full name: ${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <h2>Enter Your Names</h2>

      {/* Input for first name, updates the state on change */}
      <input
        type="text"
        placeholder="First Name" /* Holder "First Name" in the field */
        className="firstname"
        value={firstName} /* Tied the value to {firstname} */
        onChange={(e) =>
          setFirstName(e.target.value)
        } /* Change the value when typing */
      />

      {/* Input for last name, updates the state on change */}
      <input
        type="text"
        placeholder="Last Name" /* Holder "Last Name" in the field */
        className="lastname"
        value={lastName} /* Tied the value to {lastname} */
        onChange={(e) =>
          setLastName(e.target.value)
        } /* Change the value when typing */
      />

      {/* Button to show the full name, triggers the handleButtonClick function */}
      <button onClick={onClick}>Show Full Name</button>

      {/* Displays the full name when the button is clicked */}
      <div className="fullname">{fullName}</div>
    </div>
  );
}

export default App;
