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
  const startColor = image[sr][sc];

  const dfs = (image, sr, sc, startColor, newColor) => {
    if (image[sr][sc] === startColor) {
      image[sr][sc] = newColor;

      if (sr >= 1) {
        dfs(image, sr - 1, sc, startColor, newColor);
      }
      if (sc >= 1) {
        dfs(image, sr, sc - 1, startColor, newColor);
      }
      if (sr + 1 < image.length) {
        dfs(image, sr + 1, sc, startColor, newColor);
      }
      if (sc + 1 < image[0].length) {
        dfs(image, sr, sc + 1, startColor, newColor);
      }
    }
  };

  if (newColor !== startColor) {
    dfs(image, sr, sc, startColor, newColor);

    return image;
  } else {
    return image;
  }
};
