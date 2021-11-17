const display = document.querySelector('.num-display');
const numPad = document.querySelector('.num-pad');
const operators = document.querySelector('.operators');

// Float or int total for calcualtion
let num1 = 0;
let num2 = 0;
let total = 0;
let currentOperand = '';
// What is shown in the display area of the calculator
let displayContent = '0';
let digits = 0;

refreshDisplay();

// Register numPad inputs.
numPadInputs();
// Register operand inputs
operandInput();
