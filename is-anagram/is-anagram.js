// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  return (
    strA.length === strB.length &&
    checkLetters(strA, strB) &&
    distinctLetters(strA).length === distinctLetters(strB).length
  );
};

const checkLetters = (strA, strB) => {
  return [...strA].every(letter => strB.includes(letter));
};

const distinctLetters = str => {
  // regex below matches any character that repeats itself in the
  // string and replaces it with nothing. The resulting
  // string contains only unique characters
  // .    match any char
  // (?=) positive lookahead
  // .*   match any char 0 or more times
  // \1   reference capture group one
  const regex = /(.)(?=.*\1)/gi;
  return str.replace(regex, "");
};

var strA = "nnjjdyus";
var strB = "njdnsjyu";

var strA1 = "tacocat";
var strB1 = "ctatocato";

console.log(isAnagram(strA, strB), isAnagram(strA1, strB1));
console.log(distinctLetters(strA), distinctLetters(strB));
