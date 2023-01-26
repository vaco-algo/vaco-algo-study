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

  for (let parentheses of s) {
    if (parentheses === "(") {
      stack.push(parentheses);
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
