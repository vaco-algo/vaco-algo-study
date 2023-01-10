/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  if (matrix[0].length === 1 || matrix.length === 1) return matrix.flat();

  const result = [];
  const totalCount = matrix.flat().length;
  let count = 0;

  let firstIndex = 0;
  let secondIndex = -1;

  let rightDirection = true;
  let bottomDirection = false;
  let leftDirection = false;
  let topDirection = false;

  let rightLimitIndex = matrix[0].length - 1;
  let bottomLimitIndex = matrix.length - 1;
  let leftLimitIndex = 0;
  let topLimitIndex = 1;

  while (true) {
    if (rightDirection) {
      result.push(matrix[firstIndex][++secondIndex]);
      count++;

      if (secondIndex === rightLimitIndex) {
        rightDirection = false;
        bottomDirection = true;
        rightLimitIndex--;
      }
    } else if (bottomDirection) {
      result.push(matrix[++firstIndex][secondIndex]);
      count++;

      if (firstIndex === bottomLimitIndex) {
        bottomDirection = false;
        leftDirection = true;
        bottomLimitIndex--;
      }
    } else if (leftDirection) {
      result.push(matrix[firstIndex][--secondIndex]);
      count++;

      if (secondIndex === leftLimitIndex) {
        leftDirection = false;
        topDirection = true;
        leftLimitIndex++;
      }
    } else if (topDirection) {
      result.push(matrix[--firstIndex][secondIndex]);
      count++;

      if (firstIndex === topLimitIndex) {
        topDirection = false;
        rightDirection = true;
        topLimitIndex++;
      }
    }

    if (count === totalCount) break;
  }

  return result;
};
