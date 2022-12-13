/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let result = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer !== rightPointer) {
    const area = (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer]);

    result = Math.max(result, area);

    if (height[leftPointer] < height[rightPointer]) {
      leftPointer += 1;
      continue;
    }

    rightPointer -= 1;
  }

  return result;
};
