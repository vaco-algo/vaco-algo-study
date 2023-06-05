/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const kClosest = function (points, k) {
  return points
    .sort((point1, point2) => {
      const point1Distance = point1[0] ** 2 + point1[1] ** 2;
      const point2Distance = point2[0] ** 2 + point2[1] ** 2;

      if (point1Distance > point2Distance) return 1;
      if (point1Distance < point2Distance) return -1;
      return 0;
    })
    .slice(0, k);
};
