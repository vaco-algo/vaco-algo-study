/**
 * leetcode problem link: https://leetcode.com/problems/array-reduce-transformation/
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 *
 */
const reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i += 1) {
    init = fn(init, nums[i]);
  }

  return init;
};
