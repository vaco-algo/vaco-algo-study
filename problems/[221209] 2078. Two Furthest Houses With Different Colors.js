/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  if (new Set(colors).size === 1) return 0;
  const colorStartEndIndex = {};

  colors.forEach((color, index) => {
      if (obj[color]) {
          return obj[color].end = index;
      }

      obj[color] = { start: index, end: index }
  })
};
