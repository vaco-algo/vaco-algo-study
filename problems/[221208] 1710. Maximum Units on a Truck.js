/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
  const sortedBoxTypes = [...boxTypes].sort((a, b) => a[1] - b[1]);
  let result = 0;
  let remainingTruckSize = truckSize;

  while (remainingTruckSize && sortedBoxTypes.length) {
    const currentBox = sortedBoxTypes.pop();

    if (currentBox[0] > remainingTruckSize) return result += (currentBox[1] * remainingTruckSize);

    result += (currentBox[1] * currentBox[0]);
    remainingTruckSize -= currentBox[0];
  }

  return result;
};
