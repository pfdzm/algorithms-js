// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
  let limit = arr.length / 2;
  for (let i = 0; i < limit; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
};

console.log(reverseInPlace([1, 2, 3, 4, 5, 6]));
