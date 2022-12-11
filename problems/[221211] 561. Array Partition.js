/**
 * leetcode problem link: https://leetcode.com/problems/array-partition/
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedNums.length; i += 2) {
      result += sortedNums[i];
  }

  return result;
};
