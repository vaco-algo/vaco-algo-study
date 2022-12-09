/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let answer = 0;
  for (const [count, units] of boxTypes) {
    const boxesCount = Math.min(count, truckSize);

    answer += boxesCount * units;
    truckSize -= boxesCount;

    if (truckSize === 0) break;
  }

  return answer;
};
