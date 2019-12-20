// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return arr1.filter(findNum, arr2);
  } else {
    return arr2.filter(findNum, arr1);
  }
};

function findNum(num) {
  return this.includes(num);
}

const test1 = arrayIntersection([8, 88, 8, 90, 91, 8], [90, 8, 8, 15, 3]);

const test2 = arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]);

const test3 = arrayIntersection([1, 2, 3, 4, 5], [5, 0, 3, 10, -2, 1]);
const test4 = arrayIntersection(
  [13, 12, 13, 14, 13, -9, 7],
  [11, 7, 13, -19, 13, 111, 13]
);

const test5 = arrayIntersection([99, 88, 77, 66], [55, 44, 33, 22, 11]);

console.log(test1, test2, test3, test4, test5);
