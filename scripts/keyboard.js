function keyboard() {
  document.addEventListener('keyup', (e) => {
    // Get value of key pressed.
    let keyPress = e.key;

    // Prevent overflow in display area.
    if (digits == 24 && keyPress != 'Backspace') return;

    // Clear screen if operand has just been pushed.
    if (operandPressed) {
      refreshDisplay();
      if (digitCount == 1) operandPressed = false;
    }

    // Conver keyPress to proper value for numHandler

    switch (keyPress) {
      case '/':
        operandHandler('division');
        return;
      case '*':
        operandHandler('multiplication');
        return;
      case '-':
        operandHandler('subtraction');
        return;
      case '+':
        operandHandler('addition');
        return;
      case 'Backspace':
        operandHandler('backspace');
        return;
      case 'Delete':
        operandHandler('clear');
        return;
      case '1':
        keyPress = 'one';
        break;
      case '2':
        keyPress = 'two';
        break;
      case '3':
        keyPress = 'three';
        break;
      case '4':
        keyPress = 'four';
        break;
      case '5':
        keyPress = 'five';
        break;
      case '6':
        keyPress = 'six';
        break;
      case '7':
        keyPress = 'seven';
        break;
      case '8':
        keyPress = 'eight';
        break;
      case '9':
        keyPress = 'nine';
        break;
      case '0':
        keyPress = 'zero';
        break;
      case '.':
        keyPress = 'dot';
        break;
      case 'Enter':
        if (calculated) return;
        keyPress = 'equals';
        break;
    }
    numHandler(keyPress);
  });
}
