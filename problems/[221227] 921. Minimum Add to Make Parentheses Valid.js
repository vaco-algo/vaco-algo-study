/**
 * leetcode problem link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function(s) {
  const parenthesesString = s;
  const stack = [];
  let unbalancedCount = 0;

  for (const paren of parenthesesString) {
    if (!stack.length) {
      paren === ")"
        ? unbalancedCount += 1
        : stack.push(paren);

      continue;
    }

    paren === "("
      ? stack.push(paren)
      : stack.pop();
  }

  return stack.length + unbalancedCount;
};
