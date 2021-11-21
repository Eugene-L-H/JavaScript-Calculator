// Registers clicks on numPad area and passes them to handler.
function numPadInputs() {
  // Get class of button clicked on.
  numPad.addEventListener('click', (e) => {
    // Get value of key clicked.
    let keyPress = e.path[0].getAttribute('class');

    // Prevent overflow in display area.
    if (digits == 24) return;

    // Clear screen if operand has just been pushed.
    if (operandPressed) {
      refreshDisplay();
      if (digitCount == 1) operandPressed = false;
    }

    // pressed(keyPress);
    numHandler(keyPress);
  });
}

// Governs behavior of numKey buttons after recieving input from keyboard or mouse.
function numHandler(keyPress) {
  // Refresh display  and vars after last calculation.
  if (calculated) {
    // No functionality when calculation was just perfomed.
    if (keyPress == 'equals') return;
    clear();
    calculated = false; // Will set back to true after next calulation.
  }

  let value = '';

  switch (keyPress) {
    case 'one':
      value = '1';
      break;
    case 'two':
      value = '2';
      break;
    case 'three':
      value = '3';
      break;
    case 'four':
      value = '4';
      break;
    case 'five':
      value = '5';
      break;
    case 'six':
      value = '6';
      break;
    case 'seven':
      value = '7';
      break;
    case 'eight':
      value = '8';
      break;
    case 'nine':
      value = '9';
      break;
    case 'zero':
      value = '0';
      break;
    case 'dot':
      // Prevent user from inputting more than one period (dot or decimal).
      if (dot) return;
      value = '.';
      dot = true;
      break;
    case 'equals':
      // Perform no calculation if no data is present.
      if (operandPressed) return;

      // Won't caluclate until number pressed after operator.
      if (calcArray.length == 1) return;

      num1 = parseFloat(displayContent);
      calcArray.push(num1);
      calcArray.push(keyPress);
      calculate();
      return;
  }

  // Clear leading zero if there is one. Prevent leading zero after operand press.
  if (displayContent == '0') {
    if (value == '0') {
      return;
    }

    // Clear initial placeholder zero.
    displayContent = '';
  }

  digitCount++;

  if (operandPressed) {
    displayContent = value;
  } else {
    displayContent += value;
  }
  operandPressed = false;
  refreshDisplay();
}

// Registers clicks on operator area and passes them to handler.
function operandInput() {
  operators.addEventListener('click', (e) => {
    // Get class of button clicked on.
    let keyPress = e.path[0].getAttribute('class');
    operandHandler(keyPress);
  });
}

// Governs behavior of operand buttons.
function operandHandler(keyPress) {
  pressed(keyPress);

  // Allow for a decimal point to be added.
  dot = false;
  // Make new calculation off the previous total.
  if (calculated) {
    calculated = false;
    calcArray.pop();
    total = 0;
  }
  // Clear display and reset variables.
  if (keyPress == 'clear') {
    clear();
    return;
  }

  // If a previous operand was pressed another will not be registered
  if (operandPressed) return;

  // Delete one digit at a time.
  if (keyPress == 'backspace') {
    // Do nothing if displayContent is at 0.
    if (displayContent == '0') return;
    // Change remaining digit to 0 to simulate a backspace.
    if (digits == 1) {
      displayContent = '0';
    } else {
      // Delete single trailing digit.
      let dCtoString = displayContent.toString();
      let lastChar = dCtoString.charAt(digits - 1);
      if (lastChar == '.') dot = false;
      displayContent = dCtoString.slice(0, -1);
    }
    refreshDisplay();
    return;
  }

  // Register operand event.
  if (displayContent == '0') return; // Operating on 0 not needed.

  // operandPressed must be false before another operand cn be registered.
  operandPressed = true;
  digitCount = 0; // User can't input a zero after a operand press.

  num1 = parseFloat(displayContent);
  currentOperand = keyPress;

  // Push current display number and operand to respective calculation arrays.
  if (isNaN(calcArray[calcArray.length])) calcArray.push(num1);
  calcArray.push(currentOperand);
}
