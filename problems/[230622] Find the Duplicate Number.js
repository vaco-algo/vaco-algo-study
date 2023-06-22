/**
 * leetcode problem link: https://leetcode.com/problems/find-the-duplicate-number
 *
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const map = new Map();

  nums.forEach((num) => {
    map.has(num) ? map.set(num, 2) : map.set(num, 1);
  });

  for (let [key, value] of map) {
    if (value === 2) return key;
  }
};
