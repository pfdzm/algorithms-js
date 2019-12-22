// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

// Below is the ECMAscript standard indexOf algorithm
// When the indexOf method is called with two arguments searchString and position, the following steps are
// taken:
// 1. Call ToString, giving it the this value as its argument.
// 2. Call ToString(searchString).
// 3. Call ToInteger(position). (If position is undefined or not supplied, this step produces the value 0).
// 4. Compute the number of characters in Result(1).
// 5. Compute min(max(Result(3), 0), Result(4)).
// 6. Compute the number of characters in the string that is Result(2).
// 7. Compute the smallest possible integer k not smaller than Result(5) such that k+Result(6) is not greater than
// Result(4), and for all nonnegative integers j less than Result(6), the character at position k+j of Result(1) is
// the same as the character at position j of Result(2); but if there is no such integer k, then compute the value
// -1.
// 8. Return Result(7).

// 0 < k < min
// k + str2.length < str1.length
// 0 <= j < str2.length
// str1[k+j] == str2[j]
// else return -1

var strStr = function(str1, str2) {
  // console.log(str1, str2);
  let length1 = str1.length;
  let length2 = str2.length;
  let min = Math.min(0, length1);
  let res;

  if (str2.length === 0) {
    return 0;
  }

  // console.log(length1, length2, min);
  for (let k = min; k < length1; k++) {
    // console.log("k", k);
    if (k + length2 < length1) {
      for (let j = 0; j < length2; j++) {
        // console.log("j", j);
        if (str1[k + j] === str2[j]) {
          res = k;
        } else break;
      }
      if (res) {
        return res;
      }
    }
  }
  return -1;
};

console.log(strStr("JavaScript", "Scr"));
console.log(strStr("Hello", "ll"));
console.log(strStr("Hello World", ""));
