/**
 * leetcode problem link: https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let limit = nums.length;

  for (let i = 0; i < limit; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    } else if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      i -= 1;
      limit -= 1;
    }
  }
};
