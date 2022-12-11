/**
 * leetcode problem link: https://leetcode.com/problems/array-partition/
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const copyNums = [...nums];

  return copyNums
    .sort((a, b) => {
      return a - b;
    })
    .filter((num, idx) => {
      return idx % 2 === 0;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
};
