/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let answer = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = height.length - 1; j > i; j--) {
      if (height[i] <= height[j]) {
        answer = Math.max(answer, height[i] * (j - i));
        break;
      }
    }
  }

  for (let i = height.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (height[i] <= height[j]) {
        answer = Math.max(answer, height[i] * (i - j));
        break;
      }
    }
  }

  return answer;
};
