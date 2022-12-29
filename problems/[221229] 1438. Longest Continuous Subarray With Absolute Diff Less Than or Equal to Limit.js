/**
 * leetcode problem link: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

const longestSubarray = function (nums, limit) {
  function popStack(arr) {
    if (arr.length === 1) {
      return 1;
    }

    const copyArr = [...arr];

    while (copyArr.length) {
      const maximum = Math.max(...copyArr);
      const minimum = Math.min(...copyArr);

      if (maximum - minimum <= limit) {
        return copyArr.length;
      }

      copyArr.pop();
    }

    return popStack(arr.slice(0, arr.length - 1));
  }

  function shiftStack(arr) {
    if (!arr.length) {
      return 1;
    }

    const copyArr = [...arr];

    while (copyArr.length) {
      const maximum = Math.max(...copyArr);
      const minimum = Math.min(...copyArr);

      if (maximum - minimum <= limit) {
        return copyArr.length;
      }

      copyArr.pop();
    }

    return shiftStack(arr.slice(1));
  }

  return Math.max(popStack(nums), shiftStack(nums));
};
