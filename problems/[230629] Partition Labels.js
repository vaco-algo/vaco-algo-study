/**
 * @param {string} s
 * @return {number[]}
 */
//30분
var partitionLabels = function (s) {
  const endIdx = {};
  const answer = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (!endIdx[s[i]]) {
      endIdx[s[i]] = i;
    }
  }

  let right = endIdx[s[0]];
  let temp = right + 1;

  for (let left = 0; left < s.length; left++) {
    const currentNumEndIdx = endIdx[s[left]];

    if (right < currentNumEndIdx) {
      temp += currentNumEndIdx - right;
      right = currentNumEndIdx;
    }

    if (left === right) {
      right = endIdx[s[left + 1]];
      answer.push(temp);
      temp = right - left;
    }
  }

  return answer;
};
