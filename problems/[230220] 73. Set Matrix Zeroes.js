/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const columns = {};

  for (let row of matrix) {
    if (!row.includes(0)) {
      continue;
    }

    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        columns[i] = 0;
      }

      row[i] = 0;
    }
  }

  for (let col of Object.keys(columns)) {
    for (let row of matrix) {
      row[col] = 0;
    }
  }
};
