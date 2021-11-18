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
  calcArray = [];
  num1 = 0;
  displayContent = 0;
  operandPressed = false;
  digitCount = 0;
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
      displayContent = total;
      refreshDisplay(); // Display result of calculation.
      calculated = true;
    }
  }
}
