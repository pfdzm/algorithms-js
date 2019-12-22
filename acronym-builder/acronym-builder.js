// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  let regex = /(^|\s)([a-z])\w*[-']*\w*/gi;
  let result = str.replace(regex, firstLetter);
  return result;
};

// p2 is the second capture group
let firstLetter = function(match, p1, p2) {
  return p2.toUpperCase();
};

var str = "don't get stuck";

console.log(acronymBuilder(str));
