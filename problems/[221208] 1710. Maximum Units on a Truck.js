/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 const maximumUnits = function(boxTypes, truckSize) {
  const sortedBoxes = [...boxTypes].sort((a, b) => b[1] - a[1]);

  let totalCount = 0;
  let boxCount = 0;
  let currentBoxIndex = 0;
  let result = 0;

  while(totalCount < truckSize) {
    const currentBox = sortedBoxes[currentBoxIndex];

    if (!currentBox) return result;

    if (currentBox[0] > boxCount) {
      result += currentBox[1];
      boxCount += 1;
      totalCount += 1;
    } else {
      boxCount = 0;
      currentBoxIndex += 1;
    }
  }

  return result;
 };
