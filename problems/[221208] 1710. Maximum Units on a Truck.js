/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  let copyTruckSize = truckSize;

  return boxTypes
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [numberOfBoxes, numberOfUnits]) => {
      let copyBoxCount = numberOfBoxes;

      for (let i = 0; i < copyBoxCount; i++) {
        if (copyTruckSize > 0) {
          numberOfBoxes -= 1;
          acc += numberOfUnits;
          copyTruckSize -= 1;
        } else {
          break;
        }
      }

      return acc;
    }, 0);
};
