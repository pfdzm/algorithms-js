// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  const regex = /\w+/gi;
  const matches = str.match(regex);
  let reversedStr = matches.reverse().join(" ");
  return reversedStr;
};

const str1 = "A Lannister always pays his debts";
console.log(reverseWords(str1));
