// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

function reverse(str) {
  //Get the string
  //Split into letters => array
  let strArr = str.split("");
  //Loop over the array (from the otherside)
  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(strArr[i]);
  }
  //Build a new string letter-by-letter
  return res.join("");
}

const test1 = "Pablo",
  test2 = "Olga",
  test3 = "Carmen",
  test4 = "Apple",
  test5 = "Just keep swimming";

console.log(
  reverse(test1),
  reverse(test2),
  reverse(test3),
  reverse(test4),
  reverse(test5)
);
