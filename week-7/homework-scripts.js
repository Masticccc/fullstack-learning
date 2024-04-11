// Select necessary elements
let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorsbtn = document.querySelectorAll('.operatorsbutton');

// Function to check if the last input character is an arithmetic operator
function isLastInputOperator() {
  const operators = ['+', '-', '*', '/', '.']; // Define an array of arithmetic operators
  const inputValue = input.value.trim(); // Get the value of the input field and remove leading/trailing whitespace
  const lastChar = inputValue[inputValue.length - 1]; // Get the last character of the trimmed input value
  return operators.includes(lastChar); // Check if the last character is included in the array of operators
}

/* Loop through all calculator buttons
for (let i = 0; i < operatorsbtn.length; i++) {
  // Check if the last input character is an arithmetic operator
  if (isLastInputOperator()) {
     Check if the button's text content is an arithmetic operator
    if ('/.+-*'.includes(operatorsbtn[i].textContent)) {
     Disable the button if it represents an arithmetic operator
    operatorsbtn[i].disabled = true;
  }
   } else {
   Enable the button if the last input character is not an arithmetic operator
    buttons[i].disabled = false;
   } 
} */

// Function to handle calculator button clicks
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;

  if (action === '=') {
    calculateResult(); // Calculate result if '=' is clicked
  } else if (action === 'AC') {
    clearInput(); // Clear input if 'AC' is clicked
  } else if (action === 'DEL') {
    deleteLastInput(); // Delete last input if 'DEL' is clicked
  } else {
    if (!isLastInputOperator() || !'*/+-.'.includes(action)) {
      let inputValue = input.value;
      let newValue = inputValue + action;

      input.value = newValue; // Append clicked button value to input
    }
  }
};

// Add event listeners to calculator buttons
for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];
  currentButton.addEventListener('click', onCalculatorButtonClick);
}

// Function to calculate the result of the equation
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';
  let equation = '';

  try {
    result = eval(inputValue); // Evaluate the input string
    equation = inputValue; // Store the input equation
    updateHistory(equation, result); // Update history with current equation and result
    populateHistoryList(); // Populate history list with updated history
  } catch (e) {
    result = 'ERROR'; // Handle any errors during evaluation
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = ''; // Clear input equation display if error
  } else {
    inputEquation.innerHTML = inputValue; // Display input equation
  }

  input.value = result; // Display result in input field
};

// Function to clear the input field
let clearInput = function () {
  input.value = '';
};

// Function to delete the last input character
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};

// Define a variable to track whether a key is currently being pressed
let keyIsPressed = false;

// Listen for keyboard input events
document.addEventListener('keydown', function (event) {
  const key = event.key;
  const lastChar = input.value.slice(-1);
  const isOperator = ['+', '-', '*', '/', '.'].includes(lastChar);
  // Check if a key is not already being pressed
  if (!keyIsPressed) {
    let inputKey = /[\d()\-+*/.]/; // Regular expression to match input characters
    if (isOperator && ['+', '-', '*', '.', '/', '='].includes(key)) {
      operatorsbtn[i].disabled = true;
    } else if (
      [
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
      ].includes(key) // Prevent F1-F12 to register in input
    ) {
      return;
    }

    // Check if the pressed key is a digit or one of the allowed operators
    if (inputKey.test(key)) {
      input.value += key; // Append the key to the input field
    } else if (key === 'Enter' || key === '=') {
      calculateResult(); // Perform calculation on pressing Enter
    } else if (key === 'Delete' || key === 'Backspace') {
      deleteLastInput(); // Delete last input on pressing Delete or Backspace
    } else if (key === 'Escape') {
      clearInput(); // Clear input on pressing Escape
    } else {
      let inputValue = input.value;
      let newValue = inputValue + action;

      input.value = newValue; // Append clicked button value to input
    }

    // Set keyIsPressed to true to indicate that a key is being pressed
    keyIsPressed = true;
  }
});

// Listen for keyup events to reset keyIsPressed when the key is released
document.addEventListener('keyup', function (event) {
  keyIsPressed = false; // Reset keyIsPressed when the key is released
});

// Define an array to store previous equations
let equationHistory = [];

// Function to update equation history
let updateHistory = function (equation, result) {
  equationHistory.push({ equation: equation, result: result });
};

// Function to populate history list with previous equations and results
let populateHistoryList = function () {
  let historyList = document.querySelector('.input-history-list');
  historyList.innerHTML = ''; // Clear previous list items

  equationHistory.forEach(function (item) {
    let historyItem = document.createElement('div');
    historyItem.classList.add('history-item');
    historyItem.textContent = item.equation + ' = ' + item.result; // Display equation and result
    historyList.appendChild(historyItem);

    // Add event listener to each history item
    historyItem.addEventListener('click', function () {
      inputEquation.innerHTML = item.equation; // Display equation
      input.value = item.result; // Populate result into input field
    });
  });
};

// Function to toggle visibility of history list
let toggleHistoryList = function () {
  let historyList = document.querySelector('.input-history-list');
  historyList.classList.toggle('hidden'); // Toggle the 'hidden' class
};

// Event listener for history button click
document
  .querySelector('.input-history-btn')
  .addEventListener('click', function () {
    toggleHistoryList(); // Call toggleHistoryList when history button is clicked
  });
