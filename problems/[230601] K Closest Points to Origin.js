/**
 * leetcode problem link: https://leetcode.com/problems/k-closest-points-to-origin
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const obj = {};
  const answer = [];

  points.forEach((point, index) => {
    const length = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
    obj[index] = length;
  });

  const lengthArrayWithIndex = Object.entries(obj);
  const sortedLengthArray = lengthArrayWithIndex.sort((a, b) => a[1] - b[1]);
  const answerIndexArray = sortedLengthArray.slice(0, k);
  answerIndexArray.forEach((item) => {
    answer.push(points[item[0]]);
  });

  return answer;
};
