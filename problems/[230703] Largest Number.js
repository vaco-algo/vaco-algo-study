/**
 * leetcode problem link: https://leetcode.com/problems/largest-number
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const largestNumber = nums
    .sort((a, b) => {
      if (a.toString() + b.toString() > b.toString() + a.toString()) return -1;
    })
    .join("");

  return largestNumber[0] === "0" ? "0" : largestNumber;
};
