/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  if (Math.max(...nums) === 0) {
    return "0";
  }

  const array = nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`));

  return array.join("");
};
