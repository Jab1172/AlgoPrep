// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with squares of the original integers also sorted in ascending order
function compareNumbers(a, b) {
  return a - b;
}
function sortedSquaredArray(array) {
  // Write your code here.
  // create empty arr
  // loop arr.length
  // arr[i] * arr[i]
  //push  arr[i] * arr[i] -> arr
  // return arr
  // arr = [1, 2, 3];
  const arr = [];
  // 0 				2
  for (let i = 0; i <= array.length - 1; i++) {
    // o(n) time complexity

    arr.push(array[i] * array[i]); //o(n) space complexity
  }
  arr.sort(compareNumbers); // [1, 5, 40, 200]

  return arr;
}
