/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const reverseBits = function (n) {
  const inputBit = n.toString(2).split("");
  const data = new Array(32).fill(0);
  const result = [];
  const blankLength = data.length - inputBit.length;

  for (let i = blankLength; i < data.length; i += 1) {
    data[i] = inputBit[i - blankLength];
  }

  while (data.length > 0) {
    result.push(data.pop());
  }

  return parseInt(result.join(""), 2);
};
