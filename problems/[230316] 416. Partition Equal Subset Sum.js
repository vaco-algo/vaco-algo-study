/**
 * leetcode problem link: https://leetcode.com/problems/partition-equal-subset-sum
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  // 총 합이 홀수면 return false
  if (totalSum % 2 !== 0) return false;
  const halfTotalSum = totalSum / 2;

  // 가장 큰 숫자부터 합을 구하며 확인
  let startIndex = 0;
  let lastIndex = sortedNums.length - 1;
  let subSum = 0;

  while (true) {
    const smallestRemainingNum = sortedNums[startIndex];
    const biggestRemainingNum = sortedNums[lastIndex];

    // totalSum과 subSum을 비교해가며 계산
    if (totalSum - biggestRemainingNum >= subSum + biggestRemainingNum) {
      totalSum -= biggestRemainingNum;
      subSum += biggestRemainingNum;
      lastIndex--;
    } else {
      for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] > halfTotalSum - subSum) break;
        if (sortedNums[i] === halfTotalSum - subSum && startIndex < i && i < lastIndex) return true;
      }
      totalSum -= smallestRemainingNum;
      subSum += smallestRemainingNum;
      startIndex++;
    }

    if (totalSum < subSum) return false;
    if (totalSum === subSum) return true;
  }
};
