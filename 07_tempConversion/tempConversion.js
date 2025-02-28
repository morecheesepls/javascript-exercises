const convertToCelsius = function(f) {
  let f2c;
  f2c = (f-32) * (5/9);
  return parseFloat(f2c.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let c2f;
  c2f = ((c*(9/5)) + 32);
  return parseFloat(c2f.toFixed(1));
};

console.log(`F to C: ${convertToCelsius(100)}`);
console.log(`C to F: ${convertToFahrenheit(73.2)}`);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};