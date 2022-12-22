/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } else if (nums[left] + nums[right] < target) {
      right += 1;
    } else if (nums[left] + nums[right] > target) {
      left += 1;
    }
  }
};
