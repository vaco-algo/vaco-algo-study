/**
 * leetcode problem link: https://leetcode.com/problems/array-reduce-transformation/
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (!nums.length) return init;

  let result;
  nums.forEach((num) => {
    result = fn(init, num);
    init = result;
  });

  return result;
};
