/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  if (nums.length === 1) return nums[0] + "";

  const singles = [];
  const restNumbers = [...nums]
    .reduce((acc, number) => {
      if (number < 10) {
        singles.push(number);
      } else {
        acc.push(number);
      }

      return acc;
    }, [])
    .sort()
    .reverse();
  let pausedIndex = 0;

  [...singles]
    .sort((a, b) => b - a)
    .forEach((single) => {
      for (let i = pausedIndex; i < restNumbers.length; i++) {
        const current = restNumbers[i];
        const decimalSingle = Math.floor(current / 10);
        const remain = current % 10;

        if (
          (decimalSingle === single && single > remain) ||
          single > decimalSingle
        ) {
          restNumbers.splice(i, 0, single);
          pausedIndex = i + 1;
          break;
        }
      }
    });

  return restNumbers.join("");
};
