/**
 * leetcode problem link: https://leetcode.com/problems/daily-temperatures
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  // 풀이 방법: left와 right 포인터를 이용하여 중첩적인 반복문을 사용하여 해결
  // 시간 복잡도: O(m * n)
  // 공간 복잡도: O(n)

  let left = 0;
  let right = 1;
  const result = [];

  for (let i = 0; i < temperatures.length; i += 1) {
    while (right < temperatures.length) {
      if (temperatures[left] < temperatures[right]) {
        result.push(right - left);
        break;
      } else {
        right++;
        if (right === temperatures.length) {
          result.push(0);
        }
      }
    }
    right = ++left;
  }

  return result;
};
