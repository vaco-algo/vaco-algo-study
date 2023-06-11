/**
 * leetcode problem link: https://leetcode.com/problems/number-of-islands
 *
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        result++;
        checkVisit(i, j, grid);
      }
    }
  }

  return result;
};

const checkVisit = function (i, j, grid) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  )
    return;

  grid[i][j] = "0";

  // 동
  checkVisit(i + 1, j, grid);
  // 서
  checkVisit(i - 1, j, grid);
  // 남
  checkVisit(i, j + 1, grid);
  // 북
  checkVisit(i, j - 1, grid);
};
