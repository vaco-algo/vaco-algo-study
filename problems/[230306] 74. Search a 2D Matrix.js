/**
 * leetcode problem link: https://leetcode.com/problems/search-a-2d-matrix
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  for (const row of matrix) {
    const first = row[0];
    const last = row.at(-1);

    if (target < first) return false;
    if (target > last) continue;

    for (const num of row) {
      if (target === num) return true;
      if (target < num) return false;
    }
  }

  return false;
};
