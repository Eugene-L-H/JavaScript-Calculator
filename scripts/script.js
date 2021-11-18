const display = document.querySelector('.num-display');
const numPad = document.querySelector('.num-pad');
const operators = document.querySelector('.operators');

// Is set to true after a calculation. If true screen + vars will be cleared.
let calculated = false;

let calcArray = [];

// Float or int total for calcualtion
let num1 = 0;
let currentOperand = '';
// What is shown in the display area of the calculator
let displayContent = '0';
let digits = 0;

// Display is cleared on next numpad press when true.
let operandPressed = false;
// Used for clearing the screen after operator pushed.
let digitCount = 0;

// Set initial display value;
refreshDisplay();

// Register numPad inputs.
numPadInputs();
// Register operand inputs
operandInput();
