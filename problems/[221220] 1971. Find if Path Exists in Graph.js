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
  if (paths > 10) {
    return false;
  } 

  if (n === 1) {
    return true;
  }

  const relations = edges
    .filter((edge) => edge.includes(source))
    .map(([first, last]) => first === source ? last : first)

  if (relations.includes(destination)) {
    return true;
  }

  const restEdges = edges
    .filter((edge) => !edge.includes(source));

  return relations.some((rel) => validPath(n, restEdges, rel, destination, paths + 1));
};
