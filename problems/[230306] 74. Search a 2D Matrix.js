/**
 * leetcode problem link: https://leetcode.com/problems/search-a-2d-matrix
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (target < matrix[0][0]) {
    return false;
  }

  let index = 0;

  while (
    matrix.length > 1
    && index < matrix.length - 1
    && matrix[index + 1][0] <= target
  ) {
    index += 1;
  }

  for (const num of matrix[index]) {
    if (num === target) {
      return true;
    }
  }

  return false;
};
