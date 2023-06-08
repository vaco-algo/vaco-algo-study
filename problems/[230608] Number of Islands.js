/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let islandNum = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === "1") {
        islandNum += 1;
        traverse(row, col, grid);
      }
    }
  }

  return islandNum;
};

function traverse(row, col, grid) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  )
    return;

  grid[row][col] = "0";

  traverse(row, col + 1, grid);
  traverse(row, col - 1, grid);
  traverse(row + 1, col, grid);
  traverse(row - 1, col, grid);
}
