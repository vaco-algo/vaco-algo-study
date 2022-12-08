/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = [...boxTypes].sort((a, b) => b[1] - a[1]);
  let result = 0;

  for (const box of sortedBoxTypes) {
    const boxCount = Math.min(box[0], truckSize);

    result += box[1] * boxCount;
    truckSize -= boxCount;

    if (!truckSize) break;
  }

  return result;
};
