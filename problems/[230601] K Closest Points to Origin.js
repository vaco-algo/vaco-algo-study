/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const distance = [];

  for (let i = 0; i < points.length; i += 1) {
    distance.push(Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2));
  }

  const indexArray = points
    .map((_, index) => index)
    .sort((a, b) => distance[a] - distance[b]);
  const result = indexArray.map((index) => points[index]);

  return result.slice(0, k);
};
