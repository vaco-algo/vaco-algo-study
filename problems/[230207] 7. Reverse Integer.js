/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const range = 2147483648;
  let isNegative = x < 0 ? -1 : 1;

  const reverseXToString = String(x * isNegative)
    .split("")
    .reverse()
    .join("");
  const reverseX = Number(reverseXToString) * isNegative;

  if ((reverseX && reverseX > range) || (reverseX <= 0 && reverseX < range * isNegative)) return 0;

  return reverseX;
};
