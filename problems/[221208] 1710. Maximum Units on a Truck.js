/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function(boxTypes, truckSize) {
  const sortedBoxTypes = [...boxTypes];
  sortedBoxTypes.sort((a, b) => a[1] - b[1]);
  let result = 0;

  while (truckSize && sortedBoxTypes.length) {
      const currentBox = sortedBoxTypes.pop();

      if (currentBox[0] > truckSize) return result += (currentBox[1] * truckSize);

      result += (currentBox[1] * currentBox[0]);
      truckSize -= currentBox[0];
  }

    return result;
};
