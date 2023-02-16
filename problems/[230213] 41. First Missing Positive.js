/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const mySet = new Set();
  nums.forEach((value) => {
    mySet.add(value);
  });

  for (let i = 0; i < nums.length + 1; i++) {
    if (!mySet.has(i + 1)) return i + 1;
  }
};
