/**
 * leetcode problem link: https://leetcode.com/problems/two-sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const outputIndex = nums.indexOf(target - nums[i]);

    if (outputIndex !== -1 && outputIndex !== i) {
      return [i, outputIndex];
    }
  }
};
