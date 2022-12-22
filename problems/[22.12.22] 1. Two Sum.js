/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    }

    if (left === right - 1) {
      left++;
      right = nums.length - 1;
    } else {
      right--;
    }
  }
};
