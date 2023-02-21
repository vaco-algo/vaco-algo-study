/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const length = matrix[0].length;
  const rowSum = new Array(length).fill(0);
  let max = length;

  if (!max) return 0;

  let current = 0;
  let row = 0;

  while (current < max && row < matrix.length) {
    for (let i = 0; i < length; i++) {
      matrix[row][i] === "1" ? (rowSum[i] += 1) : (rowSum[i] = 0);
    }

    let count = 0;

    for (let i = 0; i < length; i++) {
      if (rowSum[i] > current) {
        count += 1;

        if (count >= current + 1) {
          current += 1;
          break;
        }
      } else {
        count = 0;
      }
    }

    row += 1;
  }

  return Math.pow(current, 2);
};
