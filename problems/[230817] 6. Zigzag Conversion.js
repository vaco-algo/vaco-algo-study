/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }

  const increment = (numRows - 1) * 2;
  const rows = Array(numRows).fill("");

  for (let i = 0; i < s.length; i++) {
    const mod = i % increment;
    const rowIndex = mod < numRows ? mod : increment - mod;
    rows[rowIndex] += s[i];
  }

  return rows.join("");
};
