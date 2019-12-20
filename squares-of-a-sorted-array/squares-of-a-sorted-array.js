// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
  return arr.map(square).sort(sortAsc);
};

let square = function(num) {
  return Math.pow(num, 2);
};

let sortAsc = function(a, b) {
  return a - b;
};

const test1 = [-4, -1, 0, 3, 10];
const test2 = [-7, -3, 2, 3, 11];

console.log("test 1 ", sortedSquares(test1));

console.log("test 2", sortedSquares(test2));
