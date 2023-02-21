/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const rowSet = new Set();
  const columnSet = new Set();
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        columnSet.add(j);
      }
    }
  }

  for (const zeroRow of rowSet) {
    matrix[zeroRow].fill(0);
  }

  for (const zeroColumn of columnSet) {
    for (const row of matrix) {
      row[zeroColumn] = 0;
    }
  }
};
