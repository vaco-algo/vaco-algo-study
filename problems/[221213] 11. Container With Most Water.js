/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  // let mostWater = 0;

  //   for (let i = 0; i < height.length - 1; i++) {
  //     for (let j = i + 1; j < height.length; j++) {
  //       mostWater = Math.max(mostWater, (j - i) * Math.min(height[i], height[j]));
  //     }
  //   }

  //   return mostWater;

  let start = 0;
  let end = height.length - 1;

  for (let i = start + 1; i < height.length; i++) {
    if ((height[i] - height[start]) > i - start) start = i;
  }

  for (let i = end - 1; i >= 0; i--) {
    if ((height[i] - height[end]) > end - i) end = i;
  }

   return (end - start) * Math.min(height[start], height[end]);
};
