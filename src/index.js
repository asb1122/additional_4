const bigInt = require('./bigInt.js');

module.exports = function multiply(first, second) {
  var num1 = bigInt(first);
  var num2 = bigInt(second);
  var multiply = num1.multiply(num2);
  return multiply.toString();
}
