/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openedBrackets = [];

  for (let chr of s) {
    openedBrackets.push(chr);
    const lastOpenBracket = openedBrackets[openedBrackets.length - 2];

    if (pair[lastOpenBracket] === chr) {
      openedBrackets.pop();
      openedBrackets.pop();
    }
  }

  return openedBrackets.length === 0;
};
