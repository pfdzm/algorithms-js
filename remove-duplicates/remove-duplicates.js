// Write a function that takes a sorted array of numbers and removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

var removeDuplicates = function(nums) {
  for (let index = 0; index < nums.length - 1; index++) {
    const element = nums[index];
    const next = nums[index + 1];
    console.log("elem", element, "next", next);
    if (element >= next) {
      nums.splice(index, 1);
      // shift index back since we've removed an element
      index -= 1;
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 9, 9]));
console.log(removeDuplicates([1, 1, 1, 2, 3]));
console.log(removeDuplicates([3, 3, 3]));
