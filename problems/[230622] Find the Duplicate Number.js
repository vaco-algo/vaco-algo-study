/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]]) return nums[i];

    numsObj[nums[i]] = true;
  }
};
