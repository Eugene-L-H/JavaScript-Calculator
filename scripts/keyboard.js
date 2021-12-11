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

function pressed(keyPress) {
  const values = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    '.': 'dot',
    Enter: 'equals',
    '=': 'equals',
    Backspace: 'backspace',
    Delete: 'clear',
    '/': 'division',
    '*': 'multiplication',
    '-': 'subtraction',
    '+': 'addition',
  };

  const className = values[keyPress];

  const key = document.querySelector(`.${className}`);
  key.classList.add('pressed');
  setTimeout(() => {
    key.classList.remove('pressed');
  }, 100);
}

function keyboardEvent(e) {
  const keyPress = e.key;
  pressed(keyPress);

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
