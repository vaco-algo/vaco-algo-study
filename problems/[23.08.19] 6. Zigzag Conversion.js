/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const map = Array.from({ length: numRows }, (_, i) => i).reduce(
    (acc, num) => ((acc[num] = []), acc),
    {}
  );

  let currentRow = 0;
  let rowDirection = +1;

  [...s].forEach((str) => {
    map[currentRow].push(str);

    if (currentRow === numRows - 1) {
      rowDirection = -1;
    }
    if (currentRow === 0) {
      rowDirection = +1;
    }

    currentRow += rowDirection;
  });

  return Object.values(map).reduce((acc, arr) => {
    acc += arr.join("");
    return acc;
  }, "");
};
