/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let str = x.toString().split("");
  let result;

  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;

  if (x === 0) return 0;
  if (x <= min || x >= max) return 0;

  if (x < 0) {
    result = str.reverse().join("");
    result = result.replace(/[^0-9]/g, "");
    if (Number("-" + result) <= min) return 0;

    return Number("-" + result);
  }
  if (x > 0) {
    result = str.reverse().join("");
    if (result >= max) return 0;

    return Number(result);
  }
};
