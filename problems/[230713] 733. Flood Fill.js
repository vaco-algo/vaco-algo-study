/**
 * leetcode problem link: https://leetcode.com/problems/flood-fill
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;

  const currentColor = image[sr][sc];

  image[sr][sc] = newColor;
  DFS(image, sr, sc, newColor, currentColor);

  return image;
};

function DFS(grid, row, col, target, origin) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const direction of directions) {
    const newRow = row + direction[0];
    const newCol = col + direction[1];

    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= grid.length ||
      newCol >= grid[0].length ||
      grid[newRow][newCol] !== origin
    )
      continue;

    grid[newRow][newCol] = target;
    DFS(grid, newRow, newCol, target, origin);
  }
}
