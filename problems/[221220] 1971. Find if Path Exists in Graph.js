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
    const vertices = new Map();

    edges.forEach(([vertex1, vertex2]) => {
        if (vertices.has(vertex1)) {
            vertices.get(vertex1).push(vertex2);
        } else {
            vertices.set(vertex1, [vertex2]);
        }

        if (vertices.has(vertex2)) {
            vertices.get(vertex2).push(vertex1);
        } else {
            vertices.set(vertex2, [vertex1]);
        }
    });

    function bfs(vertex) {
        const q = [];
        const visitedVertices = {};

        visitedVertices[vertex] = true;
        q.push(vertex);

        while (q.length) {
            const currentVertex = q.shift();

            if (currentVertex === destination) return true;

            vertices.get(currentVertex).forEach(nearVertex => {
                if (!visitedVertices[nearVertex]) {
                    visitedVertices[nearVertex] = true;
                    q.push(nearVertex);
                }
            });
        }

        return false;
    }

    return bfs(source);
};
