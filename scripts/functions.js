// Operator functions.
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, sub, mult, div };
})();

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
      let nextNum = userInput[i + 1];
      switch (listItem) {
        case 'addition':
          total = calculator.add(total, nextNum);
          break;
        case 'subtraction':
          total = calculator.sub(total, nextNum);
          break;
        case 'multiplication':
          total = calculator.mult(total, nextNum);
          break;
        case 'division':
          total = calculator.div(total, nextNum);
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
