// Governs behavior of numpad buttons.
function numPadInputs(funct) {
  // Get class of button clicked on.
  numPad.addEventListener('click', (e) => {
    // Refresh display  and vars after last calculation.
    if (calculated) {
      clear();
      calculated = false; // Will set back to true after next calulation.
    }

    // Prevent overflow in display area.
    if (digits == 24) return;

    // Clear screen if operand has just been pushed.
    if (operandPressed) {
      refreshDisplay();
      if (digitCount == 1) operandPressed = false;
    }

    let keyPress = e.path[0].getAttribute('class');
    numHandler(keyPress);
  });
}
// Registers clicks on operator area and passes them to handler.
function operandInput() {
  operators.addEventListener('click', (e) => {
    // Get class of button clicked on.
    let keyPress = e.path[0].getAttribute('class');
    operandHandler(keyPress);
  });
}

// Governs behavior of numKey buttons.
function numHandler(keyPress) {
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
      // Prevent user from inputting more than one period.
      if (displayContent.charAt(displayContent.length - 1) == '.') return;
      value = '.';
      break;
    case 'equals':
      // Perform no calculation if no data is present.
      if (operandPressed && digitCount == 0) return;

      // Won't caluclate until number pressed after operator.
      if (calcArray.length == 0) return;

      num1 = parseFloat(displayContent);
      calcArray.push(num1);
      calcArray.push(keyPress);
      calculate();
      break;
  }

  // Clear leading zero if there is one. Prevent leading zero after operand press.
  if (displayContent == '0' || operandPressed) {
    if (value == '0') return;
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

// Governs behavior of operand buttons.
function operandHandler(keyPress) {
  // Clear display and reset variables.
  if (keyPress == 'clear') {
    clear();
    return;
  }
  // Prevent further operand presses if one has already been pressed.
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
      displayContent = displayContent.slice(0, -1);
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
  calcArray.push(num1);
  calcArray.push(currentOperand);
}
