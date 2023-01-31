/**
 * leetcode problem link: undefined
 *
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let longestResult = 0;
  let current = 0;
  const openParStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openParStack.push(i - current);
      current = 0;
      continue;
    }

    if (openParStack.length) {
      current = i - openParStack.pop() + 1;
      longestResult = longestResult > current ? longestResult : current;
    } else {
      current = 0;
    }
  }

  return longestResult;
};
