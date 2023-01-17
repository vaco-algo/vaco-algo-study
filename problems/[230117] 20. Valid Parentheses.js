/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (s.length <= 1) return !s.length;

  const stack = [];
  const pairBrackets = {
    ")" : "(",
    "}" : "{",
    "]" : "[",
  };

  s.split("").forEach((item) => {
    if (pairBrackets[item] && pairBrackets[item] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });

  return stack.length === 0;
};
