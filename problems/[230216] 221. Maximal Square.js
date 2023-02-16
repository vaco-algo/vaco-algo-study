/**
 * leetcode problem link: https://leetcode.com/problems/maximal-square
 *
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
  let result = 0;

  for (const [yPoint, row] of matrix.entries()) {
    if (matrix.length - yPoint < result) {
      break;
    }

    for (const [xPoint, cell] of row.entries()) {
      if (row.length - xPoint < result) {
        break;
      }
      if (cell !== "1") {
        continue;
      }

      for (let record = 2; ; record++) {
        const points = getPoints([yPoint, xPoint], record);
        let flag = false;

        for (const [yPoint, xPoint] of points) {
          if (matrix[yPoint]?.[xPoint] !== "1") {
            result = Math.max(record - 1, result);

            flag = true;
            break;
          }
        }

        if (flag) {
          break;
        }
      }
    }
  }

  return result === 0
    ? 0
    : result * result;
};

function getPoints([xPoint, yPoint], length) {
  const points = [];

  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      points.push([xPoint + length - 1, yPoint + length - 1]);
      break;
    }
    points.push(
      [
        xPoint + length - 1,
        yPoint + i
      ],
      [
        xPoint + i, 
        yPoint + length - 1
      ]
    );
  }

  return points;
}
