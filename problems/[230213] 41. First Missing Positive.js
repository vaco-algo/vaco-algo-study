/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  for (const [idx, num] of nums.entries()) { 
    let moveNum = num; 
 
    while ( 
      moveNum > 0 // 정수가 아닌 경우 
      && moveNum < nums.length // nums 숫자 길이를 초과하는 경우 
      && idx !== moveNum - 1 // 현재 요소가 인덱스에 맞는 경우 
      && nums[moveNum - 1] !== moveNum // 이동할 요소가 인덱스 맞게 들어가있을 경우 
    ) { 
      const temp = nums[moveNum - 1]; 
      nums[moveNum - 1] = moveNum; 
      moveNum = temp; 
    } 
 
    nums[idx] = moveNum;
  }
 
  let result = 1;
 
  while (result === nums[result - 1]) {
    result += 1;
  }
 
  return result;
};
