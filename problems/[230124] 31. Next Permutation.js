/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const permutation = (arr, prefix = []) => {

  if (arr.length === 1) {
    return [prefix.concat(arr)];
  }

  const result = [];

  for (const [idx, ele] of arr.entries()) {
    const restArr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    result.push(
      ...permutation(restArr, prefix.concat(ele))
    );
  }

  return result;

};

const nextPermutation = function (nums) {

  const allNums = permutation(nums.slice().sort());
  let numsIndex = -1;

  for (const [idx, arr] of allNums.entries()) {
    if (arr.join() === nums.join()) {
      numsIndex = idx;
    }

    if (numsIndex === allNums.length - 1) {
      numsIndex = -1;
    }
  }

  for (const [idx, num] of allNums[numsIndex + 1].entries()) {
    nums[idx] = num;
  }

};
