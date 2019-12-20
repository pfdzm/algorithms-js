// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function(arr) {
  return arr.map(doubleTriple);
};

let doubleTriple = function(num) {
  if (num % 2 === 0) {
    return 2 * num;
  } else {
    return 3 * num;
  }
};

const test = doubleTripleMap([1, 2, 3, 4]);

console.log(test);
