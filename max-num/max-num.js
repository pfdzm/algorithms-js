// Write code to return the largest number in the given array

var maxNum = function(arr) {
  return arr.reduce(greaterThan, 0);
};

let greaterThan = function(accumulator, curr) {
  return curr > accumulator ? curr : accumulator;
};

console.log(maxNum([3, 1, 17, 5, 6]));
