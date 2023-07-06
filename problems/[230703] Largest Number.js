/**
 * leetcode problem link: https://leetcode.com/problems/largest-number
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const strs = nums
    .map((num) => num + "")
    .sort((a, b) => {
      if (a[0] === b[0] && a !== b) {
        if (a + b < b + a) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return b.localeCompare(a);
      }
    });

  return strs.reduce((acc, cur) => {
    if (acc[0] === "0" && cur === "0") {
      return acc;
    }
    return acc + cur;
  }, "");
};
