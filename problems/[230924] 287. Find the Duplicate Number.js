/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  // 접근 방식: 지난 번에 플로이드 알고리즘을 풀었기 때문에 간단하게 hash 테이블을 사용하여 진행하였습니다.
  // 시간 복잡도: O(n)
  // 공간 복잡도: O(n)
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) return nums[i];
    map.set(nums[i], i);
  }
};
