/**
 * leetcode problem link: https://leetcode.com/problems/largest-number/
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const arrangeList = [];
  //모든 경우의 수를 다 조합해서 push한다 (요소의 값을 비교해서 수학적으로 풀 순 없는 것인가)
  //이때 반복문의 횟수는 nums.length! 근데 factorial이 js에 없어 구현해야 돼, 중복을 거를 수 없어 제곱
  //또, 관건은 어떻게 배열 내 요소들을 움직일 것인가
  const numToString = [...nums].map((num) => num + "");
  let currentIndex = 0;

  for (const i = 0; i < nums.length ** nums.length; i++) {
    arrangeList.push(numToString.join("")); //요소들 join
    const spliceCurrentElement = numToString.splice(currentIndex, 1); //현재 인덱스에서 추출

    currentIndex++;

    while (currentIndex < nums.length) {
      numToString.splice(currentIndex, 0, spliceCurrentElement); // 다음 인덱스에 추가
    }
  }

  while (currentIndex < nums.length) {}

  return Math.max(arrangeList.map((string) => string * 1));
};
