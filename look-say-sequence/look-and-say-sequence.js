// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

const lookAndSay = function(n) {
  const regex = /[0-9]/g;
  const numbers = n.toString().match(regex);
  let result = "";
  for (let i = 9; i >= 0; i--) {
    result += counter(numbers, i);
  }
  return result;
};

const counter = function(arr, number) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i];
    if (digit == number) {
      res = res + 1;
    }
  }
  return res === 0 ? `` : `${res}${number}`;
};
console.log(lookAndSay(10090919));
