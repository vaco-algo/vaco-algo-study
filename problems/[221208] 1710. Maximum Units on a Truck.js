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
  let remainTruckSize = truckSize;

  while (remainTruckSize && sortedBoxTypes.length) {
    const currentBox = sortedBoxTypes.pop();

    if (currentBox[0] > remainTruckSize) return result += (currentBox[1] * remainTruckSize);

    result += (currentBox[1] * currentBox[0]);
    remainTruckSize -= currentBox[0];
  }

  return result;
};
