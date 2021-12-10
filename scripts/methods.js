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
  let decimalPress = false;
  let calculated = false;

  return { total, displayNum, digits, opPress, decimalPress, calculated };
})();
