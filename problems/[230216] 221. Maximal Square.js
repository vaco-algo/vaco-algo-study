/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const squareIndex = [];

  for (let i = 0; i < matrix.length; i++) {
    const row = [];

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "1") row.push(j);
    }

    squareIndex.push(row);
  }
};
