/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix//성공!
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  const XindexOfzeroValue = [];
  const YindexOfzeroValue = new Set();

  for (const [yIndex, row] of matrix.entries()) {
    for (const [xIndex, cell] of row.entries()) {
      if (cell === 0) {
        XindexOfzeroValue.push(xIndex);
        YindexOfzeroValue.add(yIndex);
      }
    }
  }

  const dupleRemoveYIndex = [...YindexOfzeroValue];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[dupleRemoveYIndex[i]]) {
      matrix[dupleRemoveYIndex[i]] = Array.from(
        { length: matrix[0].length },
        () => 0
      );
    }

    for (let j = 0; j < XindexOfzeroValue.length; j++) {
      matrix[i][XindexOfzeroValue[j]] = 0;
    }
  }

  return matrix;
};
