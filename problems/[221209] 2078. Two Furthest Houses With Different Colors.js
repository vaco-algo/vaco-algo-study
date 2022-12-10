/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const firstColorStartEnd = { start: 0, end: 0 };
  const furthestColorStartEnd = { start: null, end: null };

  colors.forEach((color, index) => {
    if (colors[0] === color) {
      firstColorStartEnd.end = index;
      return;
    }

    if (!furthestColorStartEnd.start) {
      furthestColorStartEnd.start = index;
      furthestColorStartEnd.end = index;
      return;
    }

    furthestColorStartEnd.end = index;
  });

  return Math.max(
    furthestColorStartEnd.end - firstColorStartEnd.start,
    firstColorStartEnd.end - furthestColorStartEnd.start
  );
};
