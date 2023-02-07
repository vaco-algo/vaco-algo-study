/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let stringX = Math.abs(x).toString();
  let reversedString = "";

  for (let i = 0; i < stringX.length; i++) {
    reversedString += stringX[stringX.length - i - 1];
  }

  if (
    reversedString.length > 10
    || (reversedString.length === 10 && reversedString > "2147483647")
    ) {
    return 0;
  }

  return x < 0
    ? reversedString * -1
    : reversedString * 1;
};
