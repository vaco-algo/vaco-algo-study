/**
 * leetcode problem link: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const splitParams = s.split("");
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < splitParams.length; i += 2) {
    if (pair[splitParams[i]] === splitParams[i + 1]) {
      //   splitParams.splice(0, 2);

      continue;
    }

    return false;
  }

  return true;
};
