// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let k = Math.floor(str.length / 2);
  for (let i = 0; i <= k; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("PabloolbaP"));

console.log(isPalindrome("racecar"));

console.log(isPalindrome("Tony"));
