/**
 * leetcode problem link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
  if (s.length === 1) return 1;

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] + s[i] === "()") {
      stack.pop();

      continue;
    }

    stack.push(s[i]);
  }

  return stack.length;
};
