/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      return nums[i];
    }
  }
};
