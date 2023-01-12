/**
 * leetcode problem link: https://leetcode.com/problems/rotate-image/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const tempMatrix = [];
  const length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    tempMatrix.push([]);
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      tempMatrix[i].push(matrix[i].shift());
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    for (let j = length - 1; j >= 0; j--) {
      matrix[j].push(tempMatrix[i].pop());
    }
  }
};
