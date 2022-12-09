/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  if (colors.length === 2) {
    return 1;
  }

  const endIndex = colors.length - 1;
  let maxDistanceFromStart = 0;
  let maxDistanceFromEnd = 0;

  for (let i = 0; i < endIndex; i++) {
    if (colors[i] !== colors[endIndex]) {
      maxDistanceFromStart = Math.abs(i - endIndex);

      break;
    }
  }

  for (let i = endIndex; i > 0; i--) {
    if (colors[i] !== colors[0]) {
      maxDistanceFromEnd = i;

      break;
    }
  }

  return Math.max(maxDistanceFromStart, maxDistanceFromEnd);
};
