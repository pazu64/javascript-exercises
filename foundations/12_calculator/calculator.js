const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(int) {
	let intFactorial = [];
  for (let i = int; i > 0; i--) {
    intFactorial.push(i)
  }
  return intFactorial.reduceRight((multiply, current) => multiply * current,1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
