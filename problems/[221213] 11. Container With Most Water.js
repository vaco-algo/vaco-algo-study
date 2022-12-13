/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let maxSum = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer !== height.length - 1) {
    maxSum = Math.max(
      Math.min(height[leftPointer], height[rightPointer]) *
        (rightPointer - leftPointer),
      maxSum
    );

    if (rightPointer === leftPointer + 1) {
      leftPointer++;
      rightPointer = height.length - 1;
    } else {
      rightPointer--;
    }
  }

  return maxSum;
};
// test
