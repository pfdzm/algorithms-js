// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
  let regex = /[a-z]/gi;
  return str.replace(regex, toggleCase);
};

let toggleCase = function(letter) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else return letter.toUpperCase();
};

console.log(swapCase("Luke, I Am Your Father"));
