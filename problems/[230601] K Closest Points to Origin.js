/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const pointsInfo = {};

  points.forEach((points) => {
    const distance = points[0] ** 2 + points[1] ** 2;
    pointsInfo[distance] = points;
  });

  const distanceAscending = Object.keys(pointsInfo).sort((a, b) => a - b);
  const result = [];

  while (result.length < k) {
    const index = result.length;
    result.push(pointsInfo[distanceAscending[index]]);
  }

  return result;
};
