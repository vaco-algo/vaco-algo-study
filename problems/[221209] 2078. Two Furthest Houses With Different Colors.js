/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  let leftPointer = 0;
  let rightPointer = colors.length;
  let distance1 = 0;
  let distance2 = 0;

  if (rightPointer === 1 && colors[leftPointer] !== colors[rightPointer - 1]) {
    return rightPointer;
  }

  while (leftPointer !== rightPointer) {
    if (
      colors[leftPointer] !== colors[rightPointer - 1] &&
      distance1 < rightPointer - leftPointer
    ) {
      rightPointer -= 1;
      distance1 = rightPointer - leftPointer;
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }

  leftPointer = 0;
  rightPointer = colors.length;
  while (leftPointer !== rightPointer) {
    if (
      colors[leftPointer] !== colors[rightPointer - 1] &&
      distance2 < rightPointer - leftPointer
    ) {
      leftPointer -= 1;
      distance2 = rightPointer - leftPointer;
      rightPointer += 1;
    } else {
      leftPointer -= 1;
    }
  }

  return distance1 - distance2 ? distance1 : distance2;
};
