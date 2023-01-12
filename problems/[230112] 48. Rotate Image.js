/**
 * leetcode problem link: https://leetcode.com/problems/rotate-image/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const tempMatrix = Array.from({ length: matrix.length }, () => []);

  for (let i = 0; i < tempMatrix.length; i++) {
    const stack = [];

    for (let j = 0; j < tempMatrix.length; j++) {
      stack.push(matrix[i].pop());
    }

    for (let k = 0; k < tempMatrix.length; k++) {
      tempMatrix[i].push(stack.pop());
    }
  }

  for (let i = tempMatrix.length - 1; i >= 0; i--) {
    for (let j = tempMatrix.length - 1; j >= 0; j--) {
      matrix[j].push(tempMatrix[i].pop());
    }
  }
};
