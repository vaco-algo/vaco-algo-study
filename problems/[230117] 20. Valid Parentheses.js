/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const bracket = {
  ")": "(",
  "}": "{",
  "]": "[",
};
const isValid = function(s) {
  const bracketStack = [];

  for (const str of s) {
    if ("({[".includes(str)) {
      bracketStack.push(str);
      continue;
    }

    if (bracketStack.pop() !== bracket[str]) {
      return false;
    }
  }

  return bracketStack.length === 0;
};
