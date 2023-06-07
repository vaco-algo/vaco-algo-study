/**
 * leetcode problem link: https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  for (let n = 0; n < nums.length - 1; n++) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const a = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = a;
      }
    }
  }
  return nums;
};
