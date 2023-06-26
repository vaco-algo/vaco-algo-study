/**
 * leetcode problem link: https://leetcode.com/problems/array-reduce-transformation/description/
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  let accumulator = init;

  if (nums.length === 0) return init;

  for (let i = 0; i < nums.length; i += 1) {
    if (i === nums.length - 1) {
      return fn(accumulator, nums[i]);
    }
    accumulator = fn(accumulator, nums[i]);
  }
};
