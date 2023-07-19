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

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;

  const startColor = image[sr][sc];
  const queue = [[sr, sc]];

  while (queue.length > 0) {
    const currentPixel = queue.shift();
    const [i, j] = currentPixel;

    if (image[i][j] === startColor) {
      image[i][j] = color;

      if (i > 0) queue.push([i - 1, j]);
      if (j > 0) queue.push([i, j - 1]);
      if (i < image.length - 1) queue.push([i + 1, j]);
      if (j < image[0].length - 1) queue.push([i, j + 1]);
    }
  }

  return image;

  // curVal = image[sr][sc];
  // rowLength = image.length;
  // colLength = image[0].length;

  // dfs = (arr, row, col, val) => {
  //   if (row < 0 || row >= rowLength) return;
  //   if (col < 0 || col >= colLength) return;

  //   if (arr[row][col] == val) return;
  //   if (arr[row][col] != curVal) return;

  //   arr[row][col] = val;

  //   dfs(arr, row - 1, col, val);
  //   dfs(arr, row + 1, col, val);
  //   dfs(arr, row, col + 1, val);
  //   dfs(arr, row, col - 1, val);
  // };

  // dfs(image, sr, sc, color);

  // return image;
};
