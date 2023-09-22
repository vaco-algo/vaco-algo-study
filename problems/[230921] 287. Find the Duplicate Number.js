/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return num;
    else set.add(num);
  }
};
