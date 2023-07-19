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
};
