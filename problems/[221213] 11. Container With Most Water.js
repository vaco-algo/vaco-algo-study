/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  const copyArray = [...height];
  const sortedArray = [];

  if (height.length < 3) {
    return height[0] * height[1];
  }

  for (let i = 0; i < copyArray.length; i++) {
    sortedArray.push([i, copyArray[i]]);
  }

  sortedArray.sort((a, b) => {
    return b[1] - a[1];
  });

  const longDistanceX = Math.max(
    Math.abs(sortedArray[2][0] - sortedArray[0][0]),
    Math.abs(sortedArray[2][0] - sortedArray[1][0])
  );

  return longDistanceX * sortedArray[2][1];
};
