// Updates display to current number held in memory.
function refreshDisplay() {
  display.innerHTML = memory.displayNum;
}

function numPadDisplay(keyPress) {
  // Clear screen on key press after calculation.
  if (memory.calculated == true) {
    memory.displayNum = '';
  }
  memory.calculated = false;

  // Leading 0s prevented or no more digits after can be added after 24.
  if ((keyPress == 0 && memory.displayNum == 0) || memory.digits == 24) {
    return;
    // Clear display 0 in order for first digit to take it's place.
  } else if (
    memory.displayNum === '0' ||
    (memory.opPress != '' && memory.digits == 0)
  ) {
    memory.displayNum = '';
  }

  memory.displayNum += keyPress;
  memory.digits++;
  refreshDisplay();
}

function registerOp(keyPress) {
  memory.digits = 0;

  memory.opPress = keyPress;
  memory.total = parseFloat(memory.displayNum);
  displayNum = '';
}

function backSpace() {
  if (memory.displayNum == '0') {
    return;
  }
  memory.displayNum = memory.displayNum.slice(0, -1);
  memory.digits--;
  // Display one 0 when number on display fully cleared.
  if (memory.displayNum == '') {
    memory.displayNum = '0';
  }
  refreshDisplay();
}

function clear() {
  memory.total = '0';
  memory.displayNum = '0';
  memory.digits = 0;
  memory.opPress = '';
  memory.decimalPress = false;
  memory.calculated = false;
  refreshDisplay();
}

function equals() {
  if (memory.total == 0) {
    return;
  }
  const operator = memory.opPress;
  const a = memory.total;
  const b = parseFloat(memory.displayNum);
  const calculation = processor[operator](a, b);
  memory.total = calculation;

  memory.displayNum = calculation.toString();
  memory.calculated = true;
  refreshDisplay();
}

function decimal() {
  if (memory.decimalPress == true) {
    return;
  } else if (memory.displayNum == '0' && memory.opPress != '') {
    memory.displayNum = '0';
  }

  memory.displayNum += '.';
  memory.digits++;
  memory.decimalPress = true;
  refreshDisplay();
}
