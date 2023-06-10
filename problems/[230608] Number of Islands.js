/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let island = 0;

  grid.forEach((col, colIndex) => {
    col.forEach((row, rowIndex) => {
      if (row === "1") {
        eraseNextLand(colIndex, rowIndex);
        island += 1;
      }
    });
  });

  function eraseNextLand (col, row) {
    if (grid[col + 1]?.[row] === "1") {
      grid[col + 1][row] = 0;
      eraseNextLand(col + 1, row)
    }
    if (grid[col]?.[row + 1] === "1") {
      grid[col][row + 1] = 0;
      eraseNextLand(col, row + 1)
    }
    if (grid[col - 1]?.[row] === "1") {
      grid[col - 1][row] = 0;
      eraseNextLand(col - 1, row)
    }
    if (grid[col]?.[row - 1] === "1") {
      grid[col][row - 1] = 0;
      eraseNextLand(col, row - 1)
    }
  }

  return island;
};
