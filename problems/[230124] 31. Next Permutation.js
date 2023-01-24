/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const permutation = (arr, prefix = []) => {
 // pr 중복 제출 재 업로드용
  if (arr.length === 1) {
    return [prefix.concat(arr)];
  }
 // pr 중복 제출 재 업로드용
  const result = [];
 // pr 중복 제출 재 업로드용
  for (const [idx, ele] of arr.entries()) {
    const restArr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    result.push(
      ...permutation(restArr, prefix.concat(ele))
    );
  }
 // pr 중복 제출 재 업로드용
  return result;
 // pr 중복 제출 재 업로드용
};

const nextPermutation = function (nums) {
 // pr 중복 제출 재 업로드용
  const allNums = permutation(nums.slice().sort());
  let numsIndex = -1;
 // pr 중복 제출 재 업로드용
  for (const [idx, arr] of allNums.entries()) {
    if (arr.join() === nums.join()) {
      numsIndex = idx;
    }
 // pr 중복 제출 재 업로드용
    if (numsIndex === allNums.length - 1) {
      numsIndex = -1;
    }
  }
 // pr 중복 제출 재 업로드용
  for (const [idx, num] of allNums[numsIndex + 1].entries()) {
    nums[idx] = num;
  }
 // pr 중복 제출 재 업로드용
};
