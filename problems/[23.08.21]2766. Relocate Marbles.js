/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
//시간복잡도 O(n*m) n = nums의 길이, m = moveFrom, moveTo의 길이
const relocateMarbles = function (nums, moveFrom, moveTo) {
  let result = [...nums];

  for (let i = 0; i < moveFrom.length; i++) {
    if (result.indexOf(moveFrom[i]) !== -1) {
      let resultIndex = result.indexOf(moveFrom[i]);
      result[resultIndex] = moveTo[i];
    }
  }

  return result.sort();
};
