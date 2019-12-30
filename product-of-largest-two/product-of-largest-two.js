// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = function(arr) {
  const largest = arr.reduce(largestNumber, 0);
  const largestIdx = arr.indexOf(largest);
  const newArr = [...arr.slice(0, largestIdx), ...arr.slice(largestIdx + 1)];
  const secondLargest = newArr.reduce(largestNumber);
  return largest * secondLargest;
};

const largestNumber = function(previous, current) {
  return current > previous ? current : previous;
};

const test = [10, 20, 9, 6, 3];
console.log(productOfLargestTwo(test));
