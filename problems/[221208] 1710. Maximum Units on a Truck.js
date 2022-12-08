/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  let boxArray = boxTypes;
  let totalSize = truckSize;
  let answer = 0;

  if (totalSize <= 0) return answer;

  boxArray.sort((a, b) => b[1] - a[1]);

  for (const box of boxArray) {
    if (totalSize >= box[0]) {
      answer += box[0] * box[1];
      totalSize -= box[0];
    } else {
      answer += totalSize * box[1];
      break;
    }
  }

  return answer;
};
