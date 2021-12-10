const display = document.querySelector('.num-display');
const numPad = document.querySelectorAll('.num-button');
const operators = document.querySelectorAll('.op-button');
const backSpaceKey = document.querySelector('.backspace');
const allClearKey = document.querySelector('.clear');
const equalsKey = document.querySelector('.equals');

// Store pressed numbers in calcualtor memory.
for (let i = 0; i < numPad.length; i++) {
  let key = numPad[i];

  key.addEventListener('click', (e) => {
    numPadDisplay(e);
  });
}

// Store pressed operator in calculator memory.
for (let i = 0; i < operators.length; i++) {
  let key = operators[i];

  key.addEventListener('click', (e) => {
    registerOp(e);
  });
}

backSpaceKey.addEventListener('click', () => {
  backSpace();
});

allClearKey.addEventListener('click', () => {
  clearMemory();
});
