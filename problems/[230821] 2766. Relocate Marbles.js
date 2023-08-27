/**
 * https://leetcode.com/problems/relocate-marbles/
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
const relocateMarbles = function (nums, moveFrom, moveTo) {
  // 접근 방식: 시간 복잡도 n^2을 피하기 위해 자료구조 map 사용하여 풀이
  // 시간 복잡도: O(n)
  // 공간 복잡도: O(n)

  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    map.set(nums[i], nums[i]);
  }

  for (let i = 0; i < moveFrom.length; i += 1) {
    const from = moveFrom[i];
    const to = moveTo[i];

    if (map.has(from)) {
      const marble = map.get(moveFrom[i]);

      map.delete(from);
      map.set(to, marble);
    }
  }

  return [...map.keys()].sort((a, b) => a - b);
};
