// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let strArr = str.split("");
  return strArr.filter(vowels).length;
};

let vowels = function(letter) {
  letter = letter.toLowerCase();
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
};

console.log(vowelCount("Pablo"));
console.log(vowelCount("I think, therefore I am"));
