// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
  return arr.reduce((accumulator, curr) => {
    return (accumulator += curr);
  }, 0);
};

console.log(sumArray([3, 1, 5, 6]));
