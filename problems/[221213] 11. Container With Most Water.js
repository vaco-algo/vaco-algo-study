/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const result = [];

  for (let i = 0; i < height.length; i++) {
    for (let j = 1; j < height.length; j++) {
      const horizontal = Math.abs(j - i);
      const vertical = Math.min(height[j], height[i]);

      const area = horizontal * vertical;
      result.push(area);
    }
  }
  return Math.max(...result);
};
