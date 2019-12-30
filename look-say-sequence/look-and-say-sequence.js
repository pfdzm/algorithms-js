// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

const lookAndSay = function(n) {
  const regex = /([0-9])\1*/g;
  const numbers = n.toString().replace(regex, repetitions);
  return parseInt(numbers);
};

const repetitions = function(match, p1) {
  return match.length.toString() + p1;
};

console.log(lookAndSay(10090919));
