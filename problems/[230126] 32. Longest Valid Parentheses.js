/**
 * leetcode problem link: undefined
 *
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
  if (s.length <= 1) return 0;

  let answers = [0];
  let countLeft = 0;
  let countRight = 0;
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      countLeft++;
      flag = true;
    } else if (flag && s[i] === ")") {
      countRight++;

      if (countLeft === countRight) {
        flag = false;
      }

      if (i === s.length - 1) {
        if (countLeft === countRight || answers.length === 1) answers.push(countRight);
        break;
      }

      answers.push(countRight);
    } else {
      countLeft = 0;
      countRight = 0;
    }
  }

  return Math.max(...answers) * 2;
};
