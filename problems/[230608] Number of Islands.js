/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let islandCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === "1") {
        islandCount += findCliff(row, column);
      }
    }
  }

  return islandCount;

  function findCliff(row, column) {
    if (
      row < 0 ||
      row >= grid.length ||
      column < 0 ||
      column >= grid[row].length ||
      grid[row][column] === "0"
    )
      return 0;

    grid[row][column] = "0";

    findCliff(row + 1, column);
    findCliff(row - 1, column);
    findCliff(row, column + 1);
    findCliff(row, column - 1);

    return 1;
  }
};
