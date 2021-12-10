const processor = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, sub, mult, div };
})();

const memory = (() => {
  let total = 0;

  let displayNum = '0';
  let digits = 0;
  let opPress = '';

  return { total, displayNum, digits, opPress };
})();

function refreshDisplay() {
  display.innerHTML = memory.displayNum;
}

function numPadDisplay(event) {
  let keyPress = event.target.value;

  console.log(keyPress);

  if ((keyPress == 0 && memory.displayNum == 0) || memory.digits == 24) {
    return;
  } else if (memory.displayNum == 0) {
    memory.displayNum = '';
  }

  memory.displayNum += keyPress;
  memory.digits += 1;
  refreshDisplay();
}

function registerOp(event) {
  let keyPress = event.target.value;

  memory.opPress = keyPress;
}

function backSpace() {
  if (memory.displayNum == 0) {
    return;
  }
  memory.displayNum = memory.displayNum.slice(0, -1);
  memory.digits -= 1;
  refreshDisplay();
}

function clearMemory() {
  console.log('hi');
  memory.displayNum = 0;
  memory.digits = 0;
  memory.opPress = '';
  refreshDisplay();
}
