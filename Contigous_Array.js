// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

function findMaxLength(nums) {
  debugger;
  let maxlen = [];
  for (let start = 0; start < nums.length; start++) {
    let zeroes = 0;
    let ones = 0;
    for (let end = start; end < nums.length; end++) {
      if (nums[end] == 0) {
        zeroes++;
      } else {
        ones++;
      }
      if (zeroes == ones) {
        maxlen = Math.max(maxlen, end - start + 1);
      }
    }
  }
  return maxlen;
}
let nums = [0, 1, 0];

console.log(findMaxLength(nums));
