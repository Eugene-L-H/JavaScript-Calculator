// Governs behavior of numpad buttons.
function numPadInputs() {
  // Get class of button clicked on.
  numPad.addEventListener('click', (e) => {
    // Prevent overflow in display area.
    if (digits == 24) return;

    // Clear screen if operand has just been pushed.
    if (operandPressed) {
      refreshDisplay();
      if (digitCount == 1) operandPressed = false;
    }

    let keyPress = e.path[0].getAttribute('class');
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
        operandPressed = false;
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
  });
}

// Governs behavior of operand buttons.
function operandInput() {
  operators.addEventListener('click', (e) => {
    // Prevent further operand presses if one has already been pressed.
    if (operandPressed) return;
    // Get class of button clicked on.
    let keyPress = e.path[0].getAttribute('class');

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

    // Clear display and reset variables.
    if (keyPress == 'clear') {
      num1 = 0;
      num1 = 0;
      displayContent = 0;
      operandPressed = false;
      operandCount = 0;
      calcArray = [];
      refreshDisplay();
      return;
    }

    // Register operand event.
    if (displayContent == '0') return; // Operating on 0 not needed.

    operandPressed = true;
    num1 = parseFloat(displayContent);
    currentOperand = keyPress;

    // Push current display number and operand to respective calculation arrays.
    calcArray.push(num1);
    calcArray.push(currentOperand);
  });
}