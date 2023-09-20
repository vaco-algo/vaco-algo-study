/**
 * https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 */

const orangesRotting = function (grid) {
  // 접근 방식: bfs나 dfs로 접근 해야할 듯 싶다. 거기서 얼마만에 다 탐색이 되었는지 알아야 하기 때문에 bfs로 접근하는게 좋을듯 하다.
  // 시간 복잡도: O(m * n)
  // 공간 복잡도: O(m * n)

  const row = grid.length;
  const col = grid[0].length;
  const queue = [];
  let fresh = 0;
  let minute = 0;

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < col; j += 1) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) fresh++;
    }
  }

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const [x, y] = queue.shift();

      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2;
        fresh--;
        queue.push([x - 1, y]);
      }

      if (x + 1 < row && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2;
        fresh--;
        queue.push([x + 1, y]);
      }

      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        fresh--;
        queue.push([x, y - 1]);
      }

      if (y + 1 < col && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        fresh--;
        queue.push([x, y + 1]);
      }
    }

    if (queue.length > 0) minute++;
  }

  return fresh === 0 ? minute : -1;
};
