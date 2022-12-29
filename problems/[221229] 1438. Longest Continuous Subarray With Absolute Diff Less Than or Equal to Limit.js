/**
 * leetcode problem link: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
  let result = 0;

  if (nums.length === 1) return 1;

  for (let i = 0; i < nums.length - 1; i++) {
    let subResult = 0;
    let min = nums[i];
    let max = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);

      if ((diff > limit) || (Math.abs(min - max) > limit)) {
        subResult = j - i;
        break;
      }

      if (diff <= limit && j === nums.length - 1) {
        subResult = j - i + 1;
      }
    }

    result = Math.max(result, subResult);
  }

  return result;
};
