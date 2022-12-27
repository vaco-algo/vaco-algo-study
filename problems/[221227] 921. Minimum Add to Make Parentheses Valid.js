/**
 * leetcode problem link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function(s) {
  const stack = [];
  const peek = () => stack[stack.length - 1];

  for (const paren of s) {
    peek() + paren === "()"
      ? stack.pop()
      : stack.push(paren);
  }

  return stack.length;
};
