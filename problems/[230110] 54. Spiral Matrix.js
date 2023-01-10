/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  const result = [];

  let xMin = 0;
  let xMax = matrix[0].length - 1;
  let yMin = 0;
  let yMax = matrix.length - 1;
  let x = 0;
  let y = -1;

  while (true) {
    while (y < yMax) {
      y += 1;
      result.push(matrix[x][y]);
    } 
    if (x === xMax) {
      return result;
    }
    xMin += 1;

    while (x < xMax) {
      x += 1;
      result.push(matrix[x][y]);
    }
    if (y === yMin) {
      return result;
    }
    yMax -= 1;

    while (y > yMin) {
      y -= 1;
      result.push(matrix[x][y]);
    }
    if (x === xMin) {
      return result;
    }
    xMax -= 1;

    while (x > xMin) {
      x -= 1;
      result.push(matrix[x][y]);
    }
    if (y === yMax) {
      return result;
    }
    yMin += 1;
  }
};
