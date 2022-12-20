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
  const copyEdges = [...edges];
  let isValidPath = true;

  const flatAndCountEdges = copyEdges.flat().reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const ArrayToBeRepeated = Object.values(flatAndCountEdges);

  for (let i = 0; i < ArrayToBeRepeated; i++) {
    if (ArrayToBeRepeated[i] !== 2) {
      isValidPath = false;
    }
  }

  return isValidPath;
};
