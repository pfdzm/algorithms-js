// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 60 minute playlist

const mostSongsInPlaylist = arr => {
  const sortedArr = arr.sort(ascending);

  let counter = 0;
  sortedArr.reduce((prev, curr) => {
    if (prev + curr < 60) {
      counter++;
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
  return counter;
};

const ascending = (num1, num2) => num1 - num2;

// 19 element array
var arr1 = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3];

// 4 element array
var arr2 = [3, 4, 7, 2];

console.log(mostSongsInPlaylist(arr1), mostSongsInPlaylist(arr2));
