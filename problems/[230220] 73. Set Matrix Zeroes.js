/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  const zeroCols = new Set();
  const zeroRows = new Set();

  for (const [colIdx, row] of matrix.entries()) {
    for (const [rowIdx, cell] of row.entries()) {
      if (cell === 0) {
        zeroCols.add(colIdx);
        zeroRows.add(rowIdx);
      }
    }
  }

  for (const [colIdx, row] of matrix.entries()) {
    if (zeroCols.has(colIdx)) {
      matrix[colIdx] = Array.from({ length: row.length }, () => 0);
      continue;
    }

    for (const [rowIdx, cell] of row.entries()) {
      if (zeroRows.has(rowIdx)) {
        row[rowIdx] = 0;
      }
    }
  }
};