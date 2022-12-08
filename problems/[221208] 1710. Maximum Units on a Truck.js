/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  const sortUint = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  let count = 0;
  let result = 0;

  sortUint.forEach((unit) => {
    if (count <= truckSize) {
      result = +(unit[0] * unit[1]);
      count = +unit[0];
    } else {
      result = +((truckSize - count) * unit[1]);
    }
  });

  return result;
};
