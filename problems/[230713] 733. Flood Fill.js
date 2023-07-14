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
var floodFill = function(image, sr, sc, color) {
  const initialColor = image[sr][sc];

  if (initialColor === color) return image;

  function fill(r, c) {
    image[r][c] = color;
    if (image[r - 1]?.[c] === initialColor) fill(r - 1, c);
    if (image[r + 1]?.[c] === initialColor) fill(r + 1, c);
    if (image[r][c - 1] === initialColor) fill(r, c - 1);
    if (image[r][c + 1] === initialColor) fill(r, c + 1);
  }

  fill(sr, sc);

  return image;
};
