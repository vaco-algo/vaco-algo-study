/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let p1 = 0;
  let p2 = colors.length - 1;

  while (colors[p1] === colors[p2]) {
      p2--;
  }

  const max1 = p2 - p1;

  p1 = 0;
  p2 = colors.length - 1;

  while (colors[p1] === colors[p2]) {
      p1++;
  }

  const max2 = p2 - p1;

  return Math.max(max1, max2);
};
