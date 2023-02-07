/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let currentX = x;
  let digit = Math.abs(x).toString().length - 1;
  let result = 0;

  while (digit >= 0) {
    result += (currentX % 10) * Math.pow(10, digit);
    currentX = parseInt(currentX / 10);
    digit -= 1;
  }

  return Math.pow(-2, 31) <= result && result <= Math.pow(2, 31) - 1
    ? result
    : 0;
};
