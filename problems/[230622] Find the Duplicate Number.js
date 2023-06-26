/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  return nums.reduce((accumulator, num, i, array) => {
    if (accumulator[num]) {
      array.splice(0);
      return num;
    }
    accumulator[num] = 1;
    return accumulator;
  }, {});
};
