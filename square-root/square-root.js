// Write code to create a function that accepts a non-negative integer and returns the square root of the integer. If the square root is a decimal number, round down to the nearest whole integer
// You may not use the built-in `Math.sqrt` method

// new_x = 0.5 * (x + b / x)

var sqrt = function(b) {
  let x = 1;
  let newX = newtonMethod(x, b);
  while (difference(newX, x) > 0.1) {
    x = newX;
    newX = newtonMethod(x, b);
  }
  return Math.floor(newX);
};

let newtonMethod = function(x, b) {
  return 0.5 * (x + b / x);
};

let difference = function(x, y) {
  return Math.abs(x - y);
};

// console.log(sqrt(100));

// console.log(sqrt(50));

// console.log(sqrt(25));

// console.log(sqrt(12.52));
