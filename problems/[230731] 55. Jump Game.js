/**
 * leetcode problem link: https://leetcode.com/problems/jump-game
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let index = 0;
  let max = 0;

  while (index < nums.length && index <= max) {
    max = Math.max(nums[index] + index, max);
    index += 1;
  }

  if (index === nums.length) {
    return true;
  }

  return false;
};
