/**
 * leetcode problem link: https://leetcode.com/problems/largest-number
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const result = nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

  while (result[0] === 0 && result.length > 1) {
    result.splice(0, 1);
  }

  return result.join("");
};
