/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// 7:42 ~ 8:58
const floodFill = function (image, sr, sc, color) {
  const targetColor = image[sr][sc];
  const checker = Array.from({ length: image.length }, () =>
    Array.from({ length: image[0].length }, () => 0)
  );

  function DFS(x, y) {
    if (
      x >= image.length ||
      y >= image[0].length ||
      x < 0 ||
      y < 0 ||
      image[x][y] !== targetColor ||
      checker[x][y] === 1
    ) {
      return;
    } else {
      checker[x][y] = 1;
      image[x][y] = color;

      DFS(x - 1, y);
      DFS(x + 1, y);
      DFS(x, y + 1);
      DFS(x, y - 1);
    }
  }

  DFS(sr, sc);

  return image;
};
