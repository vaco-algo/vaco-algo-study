/**
 * leetcode problem link: https://leetcode.com/problems/maximum-units-on-a-truck/
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 const maximumUnits = function(boxTypes, truckSize) {
  let sum = 0;   
  while (truckSize > 0) {
    let largestBox = boxTypes.reduce((acc, cur) => Math.max(acc, cur[1]), 0);
    boxTypes.forEach((value, i) => {
      if (value[1] === largestBox) {
        if (truckSize < value[0]){
          sum += truckSize * largestBox;
          truckSize = 0;
        } else {
          sum += value[0] * largestBox;
          truckSize -= value[0];
        }
        delete boxTypes[i];
      }
    });
  }
  
  return sum;
 };
