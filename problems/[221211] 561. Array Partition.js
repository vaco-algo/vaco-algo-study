/**
 * leetcode problem link: https://leetcode.com/problems/array-partition/
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);

  return sortedNums.reduce((sum, cur, index) => {
    if (index % 2 !== 0) {
      return sum;
    }

    return sum + cur;
  }, 0);
};
