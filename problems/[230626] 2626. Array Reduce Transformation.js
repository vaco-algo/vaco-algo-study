/**
 *  leetcode problem link: https://leetcode.com/problems/array-reduce-transformation/description/
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  let acc = init;

  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }

  return acc;
};
