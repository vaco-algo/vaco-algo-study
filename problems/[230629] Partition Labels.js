/**
 * https://leetcode.com/problems/partition-labels/
 * @param {string} s
 * @return {number[]}
 */

const partitionLabels = function (s) {
  const arr = s.split("");
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const index = arr.lastIndexOf(arr[i]);

    result.push(arr.slice(i, index + 1));

    i = index;
  }

  const res = [];

  for (i = result.length - 1; i >= 0; i -= 1) {
    if (result[i].length === 1) {
      for (j = 0; j < result.length; j += 1) {
        if (result[j].indexOf(result[i][0]) >= 0) {
          res.push(result.slice(j, i + 1));
          i = j;
          break;
        }
      }
    } else {
      res.push(result[i]);
      continue;
    }
  }

  return res
    .reverse()
    .map(
      (element) =>
        element.toString().split("").join("").replaceAll(",", "").length
    );
};
