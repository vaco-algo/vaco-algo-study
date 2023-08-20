/**
 * https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s;

  let count = 0;
  let direction = false;
  const result = [];

  for (let i = 0; i < numRows; i += 1) {
    result[i] = [];
  }

  for (let i = 0; i < s.length; i += 1) {
    result[count].push(s[i]);

    direction ? count-- : count++;

    if (count === numRows - 1 || count === 0) {
      direction = !direction;
    }
  }

  return result.reduce((acc, cur) => acc + cur.join(""), "");
};
