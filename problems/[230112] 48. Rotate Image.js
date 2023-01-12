/**
 * leetcode problem link: https://leetcode.com/problems/rotate-image/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  if (matrix.length === 1) return matrix;

  let newArr;
  let loopLength = (matrix[0].length - matrix.length) / 2;

  if (matrix.length !== matrix[0].length) {
    newArr = matrix.map((item) => {
      const copy = [...item];
      let copyLoopLength = loopLength;

      while (copyLoopLength) {
        copyLoopLength--;
        copy.shift();
        copy.pop();
      }

      return copy;
    });
  } else {
    newArr = matrix.map((item) => {
      return [...item];
    });
  }

  const topArr = newArr.map((item) => item[0]).reverse();
  if (topArr.length > 1) topArr.pop();
  const leftEdgeArr = newArr[newArr.length - 1].slice(1);
  const rightEdgeArr = newArr[0].slice(0, newArr.length - 1);
  const bottomArr = newArr.map((item) => item[item.length - 1]).reverse();
  if (bottomArr.length > 1) bottomArr.shift();

  if (loopLength > 0) {
    const firstArr = matrix[0];
    const lastArr = matrix[matrix.length - 1];
    let copyLoopLength = loopLength;

    const firstInFrist = [];
    const lastInFirst = [];
    const firstInLast = [];
    const lastInLast = [];

    while (copyLoopLength) {
      copyLoopLength--;
      firstInFrist.push(firstArr.shift());
      lastInFirst.push(firstArr.pop());

      firstInLast.push(lastArr.shift());
      lastInLast.push(lastArr.pop());
    }

    firstArr.length = 0;
    firstArr.push(...topArr);
    firstArr.unshift(...firstInFrist);
    firstArr.push(...lastInFirst);

    lastArr.length = 0;
    lastArr.push(...bottomArr);
    lastArr.unshift(...firstInLast);
    lastArr.push(...lastInLast);
  } else {
    matrix[0] = topArr;
    matrix[matrix.length - 1] = bottomArr;
  }

  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];

    if (loopLength > 0) {
      let copyLoopLength = loopLength;

      if (i === 0) {
        const last = [];
        while (copyLoopLength) {
          copyLoopLength--;
          last.push(matrix[i].pop());
        }
        matrix[i].push(rightEdgeArr.shift());
        matrix[i].push(...last);

        continue;
      }

      if (i === matrix.length - 1) {
        const first = [];
        while (copyLoopLength) {
          copyLoopLength--;
          first.push(matrix[i].shift());
        }

        matrix[i].unshift(leftEdgeArr.shift());
        matrix[i].unshift(...first);

        continue;
      }

      arr[1] = leftEdgeArr.shift();
      arr[arr.length - loopLength + 1] = rightEdgeArr.shift();

      continue;
    } else {
      if (i === 0) {
        arr.push(rightEdgeArr.shift());
        continue;
      }

      if (i === matrix.length - 1) {
        arr.unshift(leftEdgeArr.shift());
        continue;
      }

      arr[0] = leftEdgeArr.shift();
      arr[arr.length - 1] = rightEdgeArr.shift();
    }
  }

  if (matrix.length > 3) {
    rotate(matrix.slice(1, matrix.length - 1));
  }
};
