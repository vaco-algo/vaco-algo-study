/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  for (let i = colors.length - 1; i > 1; i--) {
    for (let j = 0; j + i < colors.length; j++) {
      if (colors[j] !== colors[j + i]) {
        return i;
      }
    }
  }

  return 1;
};
