/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  return boxTypes
    .slice()
    .sort((a, b) => b[1] - a[1])
    .reduce((result, currentType) => {
      if (result.leftBoxCount === 0) {
        return result;
      }

      const [numberOfBoxes, numberOfUnitsPerBox] = currentType;
      const enableBoxCount = result.leftBoxCount >= numberOfBoxes
        ? numberOfBoxes
        : result.leftBoxCount;

      return {
        leftBoxCount: result.leftBoxCount - enableBoxCount,
        total: result.total + enableBoxCount * numberOfUnitsPerBox
      };
    }, {
      leftBoxCount: truckSize,
      total: 0
    })
    .total;
}
