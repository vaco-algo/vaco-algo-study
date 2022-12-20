/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
  const visitedArr = [source];
  let edgeArr = [...edges];
  let index = 0;

  while (true) {
    let count = 0;

    for (let i = 0; i < edgeArr.length; i++) {
      if (edgeArr[i][0] === visitedArr[index] || edgeArr[i][1] === visitedArr[index]) {
        edgeArr[i][0] === visitedArr[index] && visitedArr.push(edgeArr[i][1]);
        edgeArr[i][1] === visitedArr[index] && visitedArr.push(edgeArr[i][0]);

        edgeArr = edgeArr.slice(0, i).concat(edgeArr.slice(i + 1));
        i--;
        count++;
      }
    }

    if (visitedArr.indexOf(destination) !== -1) return true;
    if (count === 0 && index === visitedArr.length - 1) return false;
    index++;
  }
};
