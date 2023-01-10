/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = [];

  function helper(matrix, resultArr) {
    if (matrix[0].length === 1) {
      return matrix.forEach((item) => resultArr.push(item));
    }
    if (matrix.length === 1) return resultArr.push(...matrix[0]);
    if (matrix.length === 2)
      return resultArr.push(...matrix[0], ...matrix[1].reverse());

    const firstItem = matrix.shift();
    const lastItem = matrix.pop();
    const middleFirstItems = [];
    const middleLastItems = [];

    for (let i = 0; i < matrix.length; i++) {
      middleFirstItems.push(matrix[i].shift());
      middleLastItems.push(matrix[i].pop());
    }

    resultArr.push(...firstItem);
    resultArr.push(...middleLastItems);
    resultArr.push(...lastItem.reverse());
    resultArr.push(...middleFirstItems.reverse());

    if (matrix[0].length > 0) return helper(matrix, resultArr);
  }

  helper(matrix, result);

  return result;
};
