/**
 * leetcode problem link: https://leetcode.com/problems/rotate-image/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  matrix
    .reverse()
    .forEach((row, rowIdx, arr) => {
      for (let i = rowIdx; i < row.length; i++) {
        const temp = arr[i][rowIdx];
        arr[i][rowIdx] = row[i];
        row[i] = temp;
      }
    });

  return;
};
