/**
 * leetcode problem link: https://leetcode.com/problems/array-partition/
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums
    .slice()
    .sort((a, b) => b - a)
    .filter((_, idx) => idx % 2)
    .reduce((acc, num) => acc + num);
};
