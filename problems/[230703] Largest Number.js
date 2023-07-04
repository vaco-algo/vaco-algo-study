/**
 * leetcode problem link: https://leetcode.com/problems/largest-number
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  let result = "";

  nums
    .sort(function (a, b) {
      return `${b}${a}` - `${a}${b}`;
    })
    .forEach((el) => (result += el));

  return result[0] === "0" ? "0" : result;
};
