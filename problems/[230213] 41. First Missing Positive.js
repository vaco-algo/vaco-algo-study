/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let minNumLength = 0;
  let minNumCount = 0;

  while (minNumCount === 10 ** minNumLength - 1) {
    minNumLength = !minNumLength ? minNumLength : minNumLength++;
    minNumCount = 0;
    const temp = minNumLength;

    for (let num of nums) {
      if (num <= 0) continue;

      const numLength = String(num).length;

      if (!minNumLength || (temp < numLength && minNumLength > numLength)) {
        minNumCount = 0;

        minNumLength = numLength;
      }

      if (numLength === minNumLength) {
        minNumCount++;
      }
    }
  }

  let min = 10 ** (minNumLength - 1);
  let max = 10 ** minNumLength;

  let halfMin = min;
  let halfMax = 10 ** minNumLength / 2;
  let count = halfMax - halfMin;

  while (halfMax - halfMin !== 0) {
    for (let num of nums) {
      if (String(num).length !== minNumLength) continue;

      if (halfMin <= num && num < halfMax) {
        count--;
      }
    }

    if (count <= 0) {
      halfMin = halfMax;
      if ((max - halfMax) / 2 < 0) {
        halfMax = max;
      } else {
        halfMax = max - Math.ceil((max - halfMax) / 2);
      }
    } else {
      halfMax = halfMax - Math.ceil((halfMax - halfMin) / 2);
    }

    count = halfMax - halfMin;
  }

  return halfMin;
};
