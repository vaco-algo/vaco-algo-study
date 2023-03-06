/**
 * leetcode problem link: https://leetcode.com/problems/search-a-2d-matrix
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  if (matrix.length === 1) return matrix[0].includes(target);

  const insideMatrixLength = matrix[0].length;
  let half = Math.floor(matrix.length / 2);
  let halfMatrix =
    matrix[half - 1][matrix[0].length - 1] < target
      ? matrix.slice(half)
      : matrix.slice(0, half);

  while (halfMatrix.length > 1) {
    half = Math.floor(halfMatrix.length / 2);

    if (halfMatrix[half - 1][insideMatrixLength - 1] < target) {
      halfMatrix = halfMatrix.slice(half);
    } else {
      halfMatrix = halfMatrix.slice(0, half);
    }
  }

  return halfMatrix[0].includes(target);
};
