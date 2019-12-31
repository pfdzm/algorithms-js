// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const next = arr[j];
      if (cur === next) {
        return false;
      }
    }
  }
  return true;
};

const arr = [3, 4, 5, 7, 9];

const arr1 = [20, -20, 18, 2, 3, 20];

console.log(isUnique(arr), isUnique(arr1));
