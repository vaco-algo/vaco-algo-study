/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */

const maximalSquare = (matrix) => {
  const mx = [-1, 0, 1, 0];
  const my = [0, -1, 0, 1];
  let flag = 1;

  const DFS = (i, j) => {
    for (let k = 0; k < 4; k++) {
      let nx = j + mx[k];
      let ny = i + my[k];

      if (nx >= 0 && ny >= 0 && Number(matrix[nx][ny]) === 1) {
        flag++;
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (Number(matrix[i][j]) === 1) {
        DFS(i, j);
      }
    }
  }
};
