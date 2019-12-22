// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  let regex = /(^|\s)[a-z]/g;
  return str.replace(regex, capitalize);
};

let capitalize = function(letter) {
  return letter.toUpperCase();
};

var str = "a lannister always pays his debts";

console.log(titleCase(str));
