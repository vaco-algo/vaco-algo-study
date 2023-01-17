/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];

  for (const paren of s) {
    if (paren === "(" || paren === "{" || paren === "[") {
      stack.push(paren);

      continue;
    }

    const peek = stack[stack.length - 1];

    if (!peek) return false;

    if (
      (peek === "(" && paren === ")") ||
      (peek === "{" && paren === "}") ||
      (peek === "[" && paren === "]")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length ? true : false;
};
