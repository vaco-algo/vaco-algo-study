/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */

const reverseInteger = (integer) => {
  const integerString = Math.abs(integer) + "";
  let reversedString = "";

  for (let i = integerString.length - 1; i >= 0; i--) {
    reversedString += integerString[i];
  }

  return Number(reversedString) * (integer < 0 ? -1 : 1);
};

const reverse = function (x) {
  const reversedX = reverseInteger(x);

  if (reversedX <= Math.pow(-2, 31) || reversedX >= Math.pow(2, 31) - 1) return 0;

  return reversedX;
};
