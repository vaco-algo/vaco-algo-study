/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let toRightIdx = 0;
  let toLeftIdx = height.length - 1;
  let answer = 0;

  while (toRightIdx < toLeftIdx) {
    const val =
      (toLeftIdx - toRightIdx) *
      Math.min(height[toRightIdx], height[toLeftIdx]);
    answer = val > answer ? val : answer;

    if (height[toLeftIdx] < height[toRightIdx]) {
      toLeftIdx--;
    } else {
      toRightIdx++;
    }
  }

  return answer;
};
