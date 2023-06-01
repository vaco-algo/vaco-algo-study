/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  // let answer = [];
  // let minDistance;

  // for (const point of points) {
  //   const currentDistance = Math.floor(
  //     Math.sqrt(point[0] ** 2 + point[1] ** 2)
  //   );

  //   if (minDistance === currentDistance) {
  //     answer.push(point);
  //   }

  //   if (
  //     !minDistance ||
  //     Math.sqrt((k - minDistance) ** 2) > Math.sqrt((k - currentDistance) ** 2)
  //   ) {
  //     minDistance = currentDistance;

  //     if (answer.length) {
  //       answer = [point];
  //       continue;
  //     }

  //     answer.push(point);
  //   }
  // }

  // return answer;

  let answer = [];

  for (const point of points) {
    const currentDistance = Math.sqrt(point[0] ** 2 + point[1] ** 2);

    answer.push({ currentDistance, point });
  }

  return answer
    .sort((a, b) => a.currentDistance - b.currentDistance)
    .map((item) => item.point)
    .slice(0, k);
};
