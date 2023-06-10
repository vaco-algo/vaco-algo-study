/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
  let island = 0;

  grid.forEach((row, rowIndex) => {
    col.forEach((col, colIndex) => {
      if (col === "1") {
        changeToZero(rowIndex, colIndex);
        island += 1;
      }
    });
  });

  function changeToZero(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[row].length ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "0";

    changeToZero(row + 1, col);
    changeToZero(row, row + 1);
    changeToZero(row - 1, col);
    changeToZero(row, col - 1);
  }

  return island;
};
