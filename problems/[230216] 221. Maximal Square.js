/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  // 푼 시간 3시간 넘음
  let max = 0;

  for (let index = 0; index < matrix.length; index++) {
    let link = 0;
    let maxLink = 0;

    for (let i = 0; i < matrix[index].length; i++) {
      if (matrix[index][i] === "1") {
        link++;
      } else {
        link = 0;
      }

      maxLink = Math.max(link, maxLink);
    }

    if (maxLink <= max) {
      max = Math.max(max, maxLink);
      continue;
    }

    let memo = matrix[index];
    const newArr = matrix.slice(index + 1, index + maxLink);

    if (newArr < max) continue;

    let maxArrCount = 1;

    for (let arr of newArr) {
      link = 0;
      let tempMax = 0;

      memo = memo.map((item, i) => {
        const multiple = item * arr[i];
        if (multiple === 1) {
          link++;
        } else {
          link = 0;
        }

        tempMax = Math.max(tempMax, link);

        return multiple;
      });

      maxLink = Math.min(tempMax, maxLink);

      if (maxLink <= maxArrCount) {
        max = Math.max(max, maxArrCount);
        break;
      }

      maxArrCount++;
    }

    max = Math.max(max, maxArrCount);
  }

  return max * max;
};
