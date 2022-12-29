/**
 * leetcode problem link: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function(nums, limit) {
  let result = 1;
  let numsQueue = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < numsQueue.length; j++) {
      if (
        numsQueue[j] > nums[i] + limit
        || numsQueue[j] < nums[i] - limit
      ) {
        numsQueue = numsQueue.slice(j + 1);
        j = -1;
      }
    }

    numsQueue.push(nums[i]);
    result = Math.max(result, numsQueue.length);
  }

  return result;
};
