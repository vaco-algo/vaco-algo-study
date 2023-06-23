/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
  const map = {};
  let result = null;

  nums.every((num) => {
    if (map[num]) {
      result = num;
      return false
    };

    map[num] = 1;
    return true;
  });
};
