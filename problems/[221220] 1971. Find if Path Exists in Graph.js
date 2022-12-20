/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
  if (source === destination) {
    return true;
  }

  const enableVertexes = new Set([source]);

  for (const vertex of enableVertexes) {
    const relations = edges
      .filter((edge) => edge.includes(vertex))
      .map(([vertex1, vertex2]) => vertex1 === vertex ? vertex2 : vertex1);

    if (relations.includes(destination)) {
      return true;
    }

    relations.forEach(rel => enableVertexes.add(rel));
  }

  return false;
};
