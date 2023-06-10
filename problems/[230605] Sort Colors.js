/**
 * leetcode problem link: https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const tump = nums[i];

        nums[i] = nums[j];
        nums[j] = tump;
      }
    }
  }

  return nums;
};
