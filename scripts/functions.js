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

function divison(a, b) {
  return a / b;
}

function refreshDisplay() {
  if (digits) display.textContent = displayContent;

  // Bump content up to prevent overflow.
  digits = displayContent.toString().length;
  if (digits > 12) {
    display.classList.add('bump-display');
  } else {
    display.classList.remove('bump-display');
  }
}

// Governs behavior of numpad buttons.
function numPadInputs() {
  // Get class of button clicked on.
  numPad.addEventListener('click', (e) => {
    // Prevent overflow in display area.
    if (digits == 24) return;

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
        '0';
        value = '.';
        break;
      case 'equals':
        value = ''; // Calculation function?
        break;
    }

    // Clear leading zero if there is one.
    if (displayContent == '0') {
      if (value == '0') return;
      displayContent = '';
    }

    displayContent += value;
    refreshDisplay();
  });
}

// Governs behavior of operand buttons.
function operandInput() {
  operators.addEventListener('click', (e) => {
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

    switch (keyPress) {
      case 'backspace':
        break;
      case 'clear':
        break;
      case 'division':
        break;
      case 'multiplication':
        break;
      case 'subtraction':
        break;
      case 'addition':
        break;
    }
  });
}
