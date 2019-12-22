// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  let words = str.split(" ");
  return words.reduce(longerThan, 0);
};

let longerThan = function(longestWord, currentWord) {
  return longestWord.length > currentWord.length ? longestWord : currentWord;
};

var str = "i love programming";

console.log(longestWord(str))