/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s;

  const chunks = [];
  let i = 0;

  while (i < s.length) {
    chunks.push(s.substring(i, i + numRows));
    i += numRows;

    if (i < s.length) {
      let reversedChunk = s
        .substring(i, i + (numRows - 2))
        .split("")
        .reverse()
        .join("");
      chunks.push(reversedChunk);
      i += numRows - 2;
    }
  }
  return convertZigzag(chunks);
};

function convertZigzag(arr) {
  let result = "";
  let indexArray = new Array(arr.length).fill(0);

  const totalIterations = arr.join("").length;

  for (let i = 0; i < arr.join("").length; i++) {
    if (i === 0 || i === totalIterations - 1) {
      for (let j = 0; j < arr.length; j += 2) {
        if (indexArray[j] < arr[j].length) {
          result += arr[j][indexArray[j]];
          indexArray[j]++;
        }
      }
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (indexArray[j] < arr[j].length) {
          result += arr[j][indexArray[j]];
          indexArray[j]++;
        }
      }
    }
  }

  return result;
}
