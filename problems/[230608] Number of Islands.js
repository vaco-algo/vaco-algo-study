/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let num = 0;

  function DFS(x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return;
    } else {
      for (let i = x; i < grid.length; i++) {
        for (let j = y; j < grid[i].length; j++) {
          if (grid[x][y] === "0") return;

          grid[x][y] = "0";

          DFS(x - 1, y);
          DFS(x + 1, y);
          DFS(x, y - 1);
          DFS(x, y + 1);
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let current = grid[i][j];

      if (current === "1") {
        DFS(i, j);
        num++;
      }
    }
  }

  return num;
};
