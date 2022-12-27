/**
 * leetcode problem link: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 *
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
  if (s.length === 1) return 1;

  const queue = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (queue[queue.length - 1] + s[i] === "()") {
      queue.pop();

      continue;
    }

    queue.push(s[i]);
  }

  return queue.length;
};
