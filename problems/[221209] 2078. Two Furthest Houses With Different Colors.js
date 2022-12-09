/**
 * leetcode problem link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 *
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const colorStartEndIndex = {};

  colors.forEach((color, index) => {
    if (colorStartEndIndex[color]) {
      return (colorStartEndIndex[color].end = index);
    }

    colorStartEndIndex[color] = { start: index, end: index };
  });

  const minSort = Object.entries(colorStartEndIndex).sort((a, b) => {
    return a[1].start - b[1].start;
  });

  const maxSort = Object.entries(colorStartEndIndex).sort((a, b) => {
    return b[1].end - a[1].end;
  });

  if (minSort[0][0] === maxSort[0][0]) {
    const nextMax = Math.max(
      Math.abs(minSort[0][1].start - maxSort[1][1].end),
      Math.abs(minSort[1][1].start - maxSort[0][1].end)
    );

    return nextMax;
  }

  return Math.abs(minSort[0][1].start - maxSort[0][1].end);
};
