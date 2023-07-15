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
const floodFill = function (image, sr, sc, color) {
  // 풀이 방법: 저번에 DFS로 풀어서 이번엔 BFS로 풀어보기
  // 시간 복잡도: 조사 필요
  // 공간 복잡도: 조사 필요
  const queue = [[sr, sc]];
  const init = image[sr][sc];

  while (queue.length > 0) {
    bfs(image, queue.shift(), color, queue, init);
  }

  return image;
};

const bfs = function (image, position, color, queue, init) {
  const [row, coloum] = position;

  if (
    row < 0 ||
    row > image.length - 1 ||
    coloum < 0 ||
    coloum > image[0].length - 1
  )
    return;
  if (image[row][coloum] === color) return;
  if (image[row][coloum] !== init) return;

  image[row][coloum] = color;

  queue.push([row + 1, coloum]);
  queue.push([row - 1, coloum]);
  queue.push([row, coloum + 1]);
  queue.push([row, coloum - 1]);
};
