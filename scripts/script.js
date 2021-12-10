const display = document.querySelector('.num-display');
const numPad = document.querySelectorAll('.num-button');
const decimalKey = document.querySelector('.dot');
const operators = document.querySelectorAll('.op-button');
const backSpaceKey = document.querySelector('.backspace');
const allClearKey = document.querySelector('.clear');
const equalsKey = document.querySelector('.equals');

document.addEventListener('keydown', (e) => {
  keyboardEvent(e);
});

// Store pressed numbers in calcualtor memory.
for (let i = 0; i < numPad.length; i++) {
  let key = numPad[i];

  key.addEventListener('click', (e) => {
    // Get value of key pressed
    let keyPress = e.target.value;
    numPadDisplay(keyPress);
  });
}

// Store pressed operator in calculator memory.
for (let i = 0; i < operators.length; i++) {
  let key = operators[i];

  key.addEventListener('click', (e) => {
    // Get value of key pressed
    let keyPress = e.target.name;
    registerOp(keyPress);
  });
}

backSpaceKey.addEventListener('click', () => {
  backSpace();
});

allClearKey.addEventListener('click', () => {
  clear(memory.opPress);
});

equalsKey.addEventListener('click', () => {
  equals();
});

decimalKey.addEventListener('click', () => {
  decimal();
});
