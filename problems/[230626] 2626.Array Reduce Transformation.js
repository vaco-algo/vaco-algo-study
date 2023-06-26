/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  if (!nums.length) return init;

  let acc = init;

  nums.forEach((item) => (acc = fn(acc, item)));

  return acc;
};
