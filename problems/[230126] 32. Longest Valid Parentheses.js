/**
 * leetcode problem link: undefined
 *
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  const stack = [];
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      const pop = stack.pop();

      if (pop === "(") {
        count += 2;
      } else {
        maxCount = count > maxCount ? count : maxCount;
        count = 0;
      }
    }
  }

  return count > maxCount ? count : maxCount;
};
