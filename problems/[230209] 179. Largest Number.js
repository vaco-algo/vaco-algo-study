/**
 * leetcode problem link: https://leetcode.com/problems/largest-number/
 *
 * @param {number[]} nums
 * @return {string}
 */
function permutation(arr, originalLength) {
  if (arr.length === 1) return [arr];
  const result = [];

  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const combinations = permutation(rest, originalLength);
    const attach = combinations.map((combination) => {
      if (arr.length !== originalLength) return [fixed, ...combination];

      return [fixed, ...combination].join("");
    });

    result.push(...attach);
  });

  return result;
}

var largestNumber = function (nums) {
  if (nums.length === 1 || (new Set(nums).size === 1 && nums[0] === 0))
    return nums[0] + "";

  let result = "";
  const keep = [];

  const sortNums = [...nums].sort().reverse();

  sortNums.forEach((num, index) => {
    const currentStringNum = num + "";

    if (keep.length) {
      if (keep[0][0] !== currentStringNum[0]) {
        result += permutation(keep, keep.length).sort().pop();
        keep.length = 0;
      } else if (index === sortNums.length - 1) {
        keep.push(currentStringNum);
        const permutationArr = permutation(keep, keep.length);
        permutationArr.sort();

        return (result += permutationArr.pop());
      } else {
        return keep.push(currentStringNum);
      }
    }

    if (
      index !== sortNums.length - 1 &&
      currentStringNum.length > 1 &&
      currentStringNum.charCodeAt(0) ===
        sortNums[index + 1].toString().charCodeAt(0)
    ) {
      return keep.push(currentStringNum);
    }

    return (result += currentStringNum);
  });

  return result;
};
