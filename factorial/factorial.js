// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
};

console.log(factorial(3), factorial(5), factorial(6), factorial(10));
