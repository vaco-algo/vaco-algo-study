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
  let mostWater = (end - start) * Math.min(height[start], height[end]);

  while (start < end) {
    if (height[start] >= height[end]) {
      end--;
      const currentWater = (end - start) * Math.min(height[start], height[end]);
      mostWater = Math.max(mostWater, currentWater);
    } else {
      start++;
      const currentWater = (end - start) * Math.min(height[start], height[end]);
      mostWater = Math.max(mostWater, currentWater);
    }
  }

  return mostWater;
};
