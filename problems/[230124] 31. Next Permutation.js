/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  if (new Set(nums).size === 1) return;

  for (let i = nums.length - 1; i >= 0; i--) {
    // 뒤에서부터 처음으로 내림차순이 되는 숫자를 찾습니다. (i - 1가 처음으로 내림차순이 되는 숫자의 인덱스)
    // [1, 3, 2, 1] 이라면 첫 번째 숫자를 말합니다. i = 1, i - 1 = 0
    if (nums[i] > nums[i - 1]) {
      let biggerNum = i + 1;

      // i가 nums.length - 1이라면 한 번만 swap하면 되는 문제라서 조건문 처리 해줍니다
      // [1, 2, 3, 4] 의 경우 처음으로 내림차순이 되는 숫자가 3이니 4, 3만 swap해주면 끝
      if (i === nums.length - 1) {
        swap(nums, i, i - 1);
        return;
      }

      // nums[i - 1] 뒤의 인덱스 숫자 중 nums[i - 1]보다 큰 숫자 목록 중 제일 작은 숫자를 biggerNum에 넣습니다.
      for (let j = i + 2; i < nums.length; i++) {
        if (nums[i - 1] < nums[j] && nums[biggerNum] < nums[j]) {
          biggerNum = j;
        }
      }

      // biggerNum 인덱스와 i - 1를 swap 해준 후 i 번째부터 끝까지의 숫자들을 sort해줍니다.
      // [1, 3, 2, 1]의 경우
      // i - 1 = 0
      // biggerNum = 2
      // swap 하면 2, 3, 1, 1
      // index 1부터 끝까지 sort
      // 2, 1, 1, 3 리턴
      swap(nums, i - 1, biggerNum);
      nums = [...nums.slice(0, i), ...nums.slice(i).sort((a, b) => a - b)];
      return;
    }
  }

  return nums.sort((a, b) => a - b);

  function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
};
