/**
 * leetcode problem link: https://leetcode.com/problems/rotting-oranges/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  let minute = 0;
  let freshOrange = 0;
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j, minute]);
      if (grid[i][j] === 1) freshOrange++;
    }
  }

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (grid[x][y] === 1) {
      grid[x][y] = 2;
      freshOrange--;
      minute = count;
    }

    for (const [dx, dy] of direction) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length)
        continue;

      if (grid[newX][newY] === 1) {
        queue.push([newX, newY, minute + 1]);
      }
    }
  }

  return freshOrange ? -1 : minute;
};
