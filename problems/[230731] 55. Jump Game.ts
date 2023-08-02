/**
 * leetcode problem link: https://leetcode.com/problems/jump-game/
 */

/**
 * @param {number[]} nums each element in the array represents your maximum jump length at that position.
 * @returns {boolean} Return true if you can reach the last index, or false otherwise.
 */

const canJump = (nums: number[]): boolean => {
  if (nums.length === 1) return true;

  let maxSteps: number = 0;
  const target: number = nums.length - 1;

  for (let i = 0; i < nums.length; i += 1) {
    if (maxSteps <= i && nums[i] === 0) return false;

    maxSteps = Math.max(maxSteps, nums[i] + i);

    if (maxSteps >= target) return true;
  }

  return false
}
