/**
 * leetcode problem link: https://leetcode.com/problems/set-matrix-zeroes
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
  let position = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) position.push([i, j]);
    }
  }

  for (let i = 0; i < position.length; i++) {
    let [x, y] = position[i];

    for (let j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }
  }

  return matrix;
};
