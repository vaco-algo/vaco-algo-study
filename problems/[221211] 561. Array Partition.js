/**
 * leetcode problem link: https://leetcode.com/problems/array-partition/
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return [...nums]
    .sort((a, b) => {
      return a - b;
    })
    .filter((_, idx) => {
      return idx % 2 === 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
};
