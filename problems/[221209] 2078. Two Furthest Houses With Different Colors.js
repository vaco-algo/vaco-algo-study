/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = function (colors) {
  let map = {};
  let array = [];

  colors.map((color, idx) => {
    if (!map.hasOwnProperty(color)) {
      map[color] = [idx];
    } else {
      map[color][1] = idx;
    }
  });

  for (color in map) {
    array.push(map[color]);
  }
};
