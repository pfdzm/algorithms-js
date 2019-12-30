// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function(str) {
  const regex = /[+-]?\d*\.*\d+/g;

  return str.match(regex) ? str.match(regex)[0] === str : false;
};

console.log(isNumeric("-0123.00"), isNumeric("+-a13"));
