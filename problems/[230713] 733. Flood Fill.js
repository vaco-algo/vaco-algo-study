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
  const initialNum = image[sr][sc];
  changeColor(image, sr, sc, initialNum, color);

  return image;
};

const changeColor = (image, x, y, initialNum, color) => {
  if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) return;
  if (image[x][y] !== initialNum) return;
  if (image[x][y] === color) return;

  image[x][y] = color;

  changeColor(image, x + 1, y, initialNum, color);
  changeColor(image, x - 1, y, initialNum, color);
  changeColor(image, x, y + 1, initialNum, color);
  changeColor(image, x, y - 1, initialNum, color);
};
