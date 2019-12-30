// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const regex = new RegExp(`${letter}`, "gi");
    if (!obj.hasOwnProperty(letter)) {
      obj[`${letter}`] = str.match(regex).length;
    }
  }
  return obj;
};

console.log(characterCount("Hello World!"));
