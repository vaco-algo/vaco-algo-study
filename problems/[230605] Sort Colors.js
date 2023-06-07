/**
 * leetcode problem link: https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  let entities = nums.length;

  for (i = 0; i < entities; i += 1) {
    if (nums[i] === 2) {
      nums.push(2);
      nums.splice(i,1);
      i -= 1;
      entities -= 1;
    }

    if (nums[i] === 0) {
      nums.splice(i,1);
      nums.unshift(0);
    }
  }
};
