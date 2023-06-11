/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let islands = 0;
  const flags = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => "0")
  );

  for (let m = 0; m < grid.length; m += 1) {
    for (let n = 0; n < grid[0].length; n += 1) {
      if (grid[m][n] !== "1" || flags[m][n] === "1") {
        continue;
      }

      const landStack = [[m, n]];

      while (landStack.length > 0) {
        const [x, y] = landStack.pop();

        if (x > 0) {
          if (grid[x - 1][y] === "1" && flags[x - 1][y] !== "1") {
            landStack.push([x - 1, y]);
          }
          flags[x - 1][y] = "1";
        }
        if (x < grid.length - 1) {
          if (grid[x + 1][y] === "1" && flags[x + 1][y] !== "1") {
            landStack.push([x + 1, y]);
          }
          flags[x + 1][y] = "1";
        }
        if (y > 0) {
          if (grid[x][y - 1] === "1" && flags[x][y - 1] !== "1") {
            landStack.push([x, y - 1]);
          }
          flags[x][y - 1] = "1";
        }
        if (y < grid[0].length - 1) {
          if (grid[x][y + 1] === "1" && flags[x][y + 1] !== "1") {
            landStack.push([x, y + 1]);
          }
          flags[x][y + 1] = "1";
        }
      }

      islands += 1;
    }
  }

  return islands;
};
