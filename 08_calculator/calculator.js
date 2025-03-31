const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  const sumOfArray = array.reduce((total, currentValue) => total + currentValue, 0);
  return sumOfArray;
};

const multiply = function(arr) {
  const productOfArray = arr.reduce((total, currentValue) => total * currentValue);
  return productOfArray;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
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
