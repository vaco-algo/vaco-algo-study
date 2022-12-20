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
  const queue = [source];
  const copiedEdges = [...edges];
  const enqueue = (vertex) => queue.push(vertex);
  const dequeue = () => queue.shift();

  const visitedVertexes = Array.from({ length: n }).fill(false);
  visitedVertexes[source] = true;

  while (queue.length > 0) {
    const currentVertex = dequeue();

    if (currentVertex === destination) return true;

    const currentEdge = copiedEdges[currentVertex];

    for (let i = 0; i < currentEdge.length; i++) {
      if (visitedVertexes[currentEdge[i]]) continue;

      enqueue(currentEdge[i]);
      visitedVertexes[currentEdge[i]] = true;
    }
  }

  return false;
};
