// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  const regex = /(^|\s)([a-z])/gi;
  return str.replace(regex, camelCasify);
};

const camelCasify = (match, $1, $2) => $2.toUpperCase();

console.log(camelCase("A Lannister always pays his debts"));
