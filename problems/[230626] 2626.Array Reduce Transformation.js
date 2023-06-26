/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  let acc = init;

  if (!nums.length) return acc;

  nums.forEach((item) => (acc = fn(acc, item)));

  return acc;
};
