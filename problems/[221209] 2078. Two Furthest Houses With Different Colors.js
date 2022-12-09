/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const answers = [0];
  const inputArr = colors;

  const firstItem = inputArr[0];
  const lastItem = inputArr[inputArr.length - 1];

  for (let i = inputArr.length - 1; i > 0; i--) {
    if (inputArr[i] !== firstItem) {
      answers.push(i);
      break;
    }
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] !== lastItem) {
      answers.push(inputArr.length - i - 1);
      break;
    }
  }

  return Math.max(...answers);
};
