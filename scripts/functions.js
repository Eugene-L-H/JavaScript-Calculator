// Operator functions.
function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Used each time the display needs to change.
function refreshDisplay() {
  // if (operandPressed) displayContent = '';
  display.textContent = displayContent;

  // Bump content up to prevent overflow.
  digits = displayContent.toString().length;
  if (digits > 12) {
    display.classList.add('bump-display');
  } else {
    display.classList.remove('bump-display');
  }
}

// Reset all variables and clear screen.
function clear() {
  calculated = false;
  calcArray = [];
  num1 = 0;
  currentOperand = '';
  displayContent = 0;
  dot = false;
  digits = 0;
  operandPressed = false;
  refreshDisplay();
}

// Perfom calculation when user presses "equals" and display result.
function calculate() {
  let userInput = calcArray;
  let total = userInput[0];

  for (let i = 1; i < userInput.length; i++) {
    let listItem = userInput[i];

    if (typeof listItem == 'string') {
      switch (listItem) {
        case 'addition':
          total = addition(total, userInput[i + 1]);
          break;
        case 'subtraction':
          total = subtraction(total, userInput[i + 1]);
          break;
        case 'multiplication':
          total = multiplication(total, userInput[i + 1]);
          break;
        case 'division':
          total = division(total, userInput[i + 1]);
          break;
        case 'equals':
          displayContent = total;
          break;
      }
    }
    refreshDisplay(); // Display result of calculation.
    // Clear array and push total to be operated on after screen refresh.
    calcArray = [];
    calcArray.push(total);
    // While calculated is true, next numkey press will refresh screen and vars.
    calculated = true;
  }
}
