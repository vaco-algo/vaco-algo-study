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
  curVal = image[sr][sc];
  rowLength = image.length;
  colLength = image[0].length;

  dfs = (arr, row, col, val) => {
    if (row < 0 || row >= rowLength) return;
    if (col < 0 || col >= colLength) return;

    if (arr[row][col] == val) return;
    if (arr[row][col] != curVal) return;

    arr[row][col] = val;

    dfs(arr, row - 1, col, val);
    dfs(arr, row + 1, col, val);
    dfs(arr, row, col + 1, val);
    dfs(arr, row, col - 1, val);
  };

  dfs(image, sr, sc, color);

  return image;
};
