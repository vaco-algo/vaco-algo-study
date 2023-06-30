/**
 * @param {string} s
 * @return {number[]}
 */

var partitionLabels = function (s) {
  const endIdx = {};
  const answer = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (!endIdx[s[i]]) {
      endIdx[s[i]] = i;
    }
  }

  let right = endIdx[s[0]];
  let temp = s.slice(0, right + 1);

  for (let left = 0; left < s.length; left++) {
    const currentNumEndIdx = endIdx[s[left]];

    if (right < currentNumEndIdx) {
      temp += s.slice(right + 1, currentNumEndIdx + 1);
      right = currentNumEndIdx;
    }

    if (left === right) {
      right = endIdx[s[left + 1]];
      answer.push(temp.length);
      temp = s.slice(left + 1, right + 1);
    }
  }

  return answer;
};
