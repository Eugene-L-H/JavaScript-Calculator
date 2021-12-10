function translateOperand(keyPress) {
  let translated = '';
  if (keyPress == '+') {
    translated = 'add';
  } else if (keyPress == '-') {
    translated = 'sub';
  } else if (keyPress == '*') {
    translated = 'mult';
  } else if (keyPress == '/') {
    translated = 'div';
  }

  return translated;
}

function keyboardEvent(e) {
  const keyPress = e.key;

  if (!isNaN(keyPress)) {
    numPadDisplay(keyPress);
  } else if (keyPress == '.') {
    decimal();
  } else if (keyPress == 'Backspace') {
    backSpace();
  } else if (keyPress == 'Delete') {
    clear();
  } else if (keyPress == '=' || keyPress == 'Enter') {
    equals();
  } else {
    let operand = translateOperand(keyPress);
    registerOp(operand);
  }
}
