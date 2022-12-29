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
  let numsQueueMax = nums[0];
  let numsQueueMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    numsQueue.push(nums[i]);
    numsQueueMax = Math.max(numsQueueMax, nums[i]);
    numsQueueMin = Math.min(numsQueueMin, nums[i]);

    if (numsQueue.length < result) {
      continue;
    }

    if (numsQueueMax - numsQueueMin > limit) {
      const el = numsQueue.shift();

      if (el === numsQueueMax) {
        numsQueueMax = Math.max(...numsQueue);
      } else if (el === numsQueueMin) {
        numsQueueMin = Math.min(...numsQueue);
      }
    }

    result = Math.max(result, numsQueue.length);
  }

  return result;
};
