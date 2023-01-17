/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  if (s.length === 1 || new Set(s).size === 1) return false;

  const leftParentheses = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      leftParentheses.push(char);
    }

    if (char === ")") {
      if (leftParentheses.pop() !== "(") return false;
    }

    if (char === "}") {
      if (leftParentheses.pop() !== "{") return false;
    }

    if (char === "]") {
      if (leftParentheses.pop() !== "[") return false;
    }
  }

  return leftParentheses.length ? false : true;
};
