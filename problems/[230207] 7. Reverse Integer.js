/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const result = [];
  const numToString = x.toString().split("");

  if (Math.abs(x) > Math.pow(2, 31)) return 0;

  if (x > 0) {
    for (let i = 0; i < x.toString().length; i++) {
      result.push(numToString.pop());
    }
  } else {
    result.push(numToString[0]);

    for (let i = 1; i < x.toString().length; i++) {
      result.push(numToString.pop());
    }
  }

  if (Math.abs(Number(result.join(""))) > Math.pow(2, 31)) return 0;

  return Number(result.join(""));
};
