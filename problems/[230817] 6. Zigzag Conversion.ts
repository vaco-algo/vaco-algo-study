/**
 * leetcode problem link: https://leetcode.com/problems/zigzag-conversion
 */

/**
 *
 * @param {string} s
 * @param {number} numRows
 * @returns {string}
 */

const convert = (s: string, numRows: number): string => {
  if (numRows === 1) return s;

  const stringArr: string[] = Array(numRows).fill("");
  let result: string = "";

  const alter = (char: string, int: number): void => {
    for (let i = 0; i < numRows; i++) {
      if (int === i || int === 2 * numRows - 2 - i) stringArr[i] += char;
    }
  };

  for (let i = 0; i < s.length; i++) {
    const remainder: number = i % (2 * numRows - 2);
    alter(s[i], remainder);
  }

  stringArr.forEach((string) => {
    result += string;
  });

  return result;
};
